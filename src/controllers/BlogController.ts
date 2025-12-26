// controllers/BlogController.ts
import axios from 'axios';

export interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tag: string;
}

export interface NewsDetail {
  id: number;
  userId: number;
  title: string;
  body: string;
  image: string;
  tag: string;
  date: string;
  user?: {
    name: string;
    email: string;
    website?: string;
    company?: {
      name: string;
    };
  };
}

export class BlogController {
  private static postsPerPage = 18;
  private static userCache = new Map<number, any>();
  private static totalPosts = 100;

  static async getBlogs(page = 1): Promise<{ blogs: Blog[]; totalPages: number }> {
    try {
      // Fetch posts from API with pagination
      const postsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${this.postsPerPage}`
      );
      
      const totalPages = Math.ceil(this.totalPosts / this.postsPerPage);
      
      // Fetch users if notCched
      if (this.userCache.size === 0) {
        await this.fetchUsers();
      }

      // Transform API data to match your Blog interface
      const blogs: Blog[] = postsResponse.data.map((post: any) => {
        const user = this.userCache.get(post.userId);
        const userName = user ? user.name : `User ${post.userId}`;
        
        return {
          id: post.id,
          image: this.getRandomImage(post.id),
          title: post.title,
          description: this.truncateText(post.body, 150),
          author: userName,
          date: this.formatDate(post.id),
          tag: this.getRandomTag(post.id)
        };
      });

      return { blogs, totalPages };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  }

  // Static method to get single news detail
  static async getNewsDetail(id: number): Promise<NewsDetail> {
    try {
      const [postResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
        this.fetchUsers()
      ]);

      const post = postResponse.data;
      const user = this.userCache.get(post.userId);

      return {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
        image: this.getRandomImage(post.id),
        tag: this.getRandomTag(post.id),
        date: this.formatDate(post.id),
        user: user ? {
          name: user.name,
          email: user.email,
          website: user.website,
          company: user.company
        } : undefined
      };
    } catch (error) {
      console.error('Error fetching news detail:', error);
      throw error;
    }
  }

  static getPostsPerPage(): number {
    return this.postsPerPage;
  }

  // Private helper metd
  private static async fetchUsers(): Promise<void> {
    if (this.userCache.size > 0) return;
    
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      response.data.forEach((user: any) => {
        this.userCache.set(user.id, user);
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  private static getRandomImage(id: number): string {
    const images = [
      'https://images.unsplash.com/photo-1529429617124-95b109e86bb8',
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa'
    ];
    return images[id % images.length];
  }

  private static getRandomTag(id: number): string {
    const tags = ['Technology', 'Design', 'Lifestyle', 'Business'];
    return tags[id % tags.length];
  }

  private static formatDate(id: number): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = (id % 28) + 1;
    const monthIndex = id % 12;
    const year = 2025;
    return `${months[monthIndex]} ${day}, ${year}`;
  }

  private static truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }
}