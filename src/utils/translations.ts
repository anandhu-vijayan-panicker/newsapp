// utils/translations.ts
type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

const translations: Translations = {
  // App & Navigation
  appName: {
    en: 'News Plus',
    ar: 'نيوز بلس'
  },
  home: {
    en: 'Home',
    ar: 'الرئيسية'
  },
  pages: {
    en: 'Pages',
    ar: 'الصفحات'
  },
  blogs: {
    en: 'Blogs',
    ar: 'المدونات'
  },
  support: {
    en: 'Support',
    ar: 'الدعم'
  },
  subscribe: {
    en: 'Subscribe',
    ar: 'اشترك'
  },
  settings: {
    en: 'Settings',
    ar: 'الإعدادات'
  },
  profile: {
    en: 'Profile',
    ar: 'الملف الشخصي'
  },
  logout: {
    en: 'Logout',
    ar: 'تسجيل الخروج'
  },
  login: {
    en: 'Login',
    ar: 'تسجيل الدخول'
  },
  register: {
    en: 'Register',
    ar: 'تسجيل'
  },

  // News & Articles
  latestNews: {
    en: 'Latest News',
    ar: 'آخر الأخبار'
  },
  trending: {
    en: 'Trending',
    ar: 'الأكثر انتشاراً'
  },
  featured: {
    en: 'Featured',
    ar: 'مميز'
  },
  categories: {
    en: 'Categories',
    ar: 'الفئات'
  },
  allCategories: {
    en: 'All Categories',
    ar: 'جميع الفئات'
  },
  technology: {
    en: 'Technology',
    ar: 'تكنولوجيا'
  },
  business: {
    en: 'Business',
    ar: 'أعمال'
  },
  entertainment: {
    en: 'Entertainment',
    ar: 'ترفيه'
  },
  sports: {
    en: 'Sports',
    ar: 'رياضة'
  },
  health: {
    en: 'Health',
    ar: 'صحة'
  },
  science: {
    en: 'Science',
    ar: 'علم'
  },

  // Article Content
  by: {
    en: 'By',
    ar: 'بواسطة'
  },
  readMore: {
    en: 'Read more',
    ar: 'اقرأ المزيد'
  },
  readFullStory: {
    en: 'Read full story',
    ar: 'قراءة القصة كاملة'
  },
  writtenBy: {
    en: 'Written by',
    ar: 'كتب بواسطة'
  },
  publishedOn: {
    en: 'Published on',
    ar: 'نشر في'
  },
  updatedOn: {
    en: 'Updated on',
    ar: 'تم التحديث في'
  },
  minRead: {
    en: 'min read',
    ar: 'دقيقة قراءة'
  },
  views: {
    en: 'views',
    ar: 'مشاهدة'
  },
  shares: {
    en: 'shares',
    ar: 'مشاركة'
  },
  comments: {
    en: 'comments',
    ar: 'تعليقات'
  },
  addComment: {
    en: 'Add comment',
    ar: 'أضف تعليق'
  },

  // Post Detail Page
  backToNews: {
    en: '← Back to News',
    ar: '← العودة للأخبار'
  },
  backToHome: {
    en: 'Back to Home',
    ar: 'العودة للرئيسية'
  },
  relatedStories: {
    en: 'Related Stories',
    ar: 'قصص ذات صلة'
  },
  moreFromAuthor: {
    en: 'More from this author',
    ar: 'المزيد من هذا الكاتب'
  },
  shareThisStory: {
    en: 'Share this story',
    ar: 'شارك هذه القصة'
  },
  shareTwitter: {
    en: 'Share on Twitter',
    ar: 'شارك على تويتر'
  },
  shareFacebook: {
    en: 'Share on Facebook',
    ar: 'شارك على فيسبوك'
  },
  shareLinkedIn: {
    en: 'Share on LinkedIn',
    ar: 'شارك على لينكدإن'
  },
  shareWhatsApp: {
    en: 'Share on WhatsApp',
    ar: 'شارك على واتساب'
  },
  copyLink: {
    en: 'Copy link',
    ar: 'نسخ الرابط'
  },
  linkCopied: {
    en: 'Link copied!',
    ar: 'تم نسخ الرابط!'
  },

  // Author Info
  author: {
    en: 'Author',
    ar: 'الكاتب'
  },
  bio: {
    en: 'Bio',
    ar: 'السيرة الذاتية'
  },
  website: {
    en: 'Website',
    ar: 'الموقع الإلكتروني'
  },
  email: {
    en: 'Email',
    ar: 'البريد الإلكتروني'
  },
  follow: {
    en: 'Follow',
    ar: 'تابع'
  },
  following: {
    en: 'Following',
    ar: 'متابع'
  },
  followers: {
    en: 'Followers',
    ar: 'متابعون'
  },
  articles: {
    en: 'Articles',
    ar: 'مقالات'
  },

  // Pagination & Navigation
  page: {
    en: 'Page',
    ar: 'صفحة'
  },
  of: {
    en: 'of',
    ar: 'من'
  },
  previous: {
    en: 'Previous',
    ar: 'السابق'
  },
  next: {
    en: 'Next',
    ar: 'التالي'
  },
  first: {
    en: 'First',
    ar: 'الأول'
  },
  last: {
    en: 'Last',
    ar: 'الأخير'
  },
  goToPage: {
    en: 'Go to page',
    ar: 'اذهب إلى صفحة'
  },
  showing: {
    en: 'Showing',
    ar: 'عرض'
  },
  to: {
    en: 'to',
    ar: 'إلى'
  },
  results: {
    en: 'results',
    ar: 'نتيجة'
  },

  // Search & Filter
  search: {
    en: 'Search',
    ar: 'بحث'
  },
  searchPlaceholder: {
    en: 'Search news...',
    ar: 'ابحث في الأخبار...'
  },
  filter: {
    en: 'Filter',
    ar: 'تصفية'
  },
  sortBy: {
    en: 'Sort by',
    ar: 'ترتيب حسب'
  },
  newest: {
    en: 'Newest',
    ar: 'الأحدث'
  },
  oldest: {
    en: 'Oldest',
    ar: 'الأقدم'
  },
  popular: {
    en: 'Popular',
    ar: 'الأكثر شهرة'
  },
  relevance: {
    en: 'Relevance',
    ar: 'الأكثر صلة'
  },
  clearFilters: {
    en: 'Clear filters',
    ar: 'مسح الفلاتر'
  },
  applyFilters: {
    en: 'Apply filters',
    ar: 'تطبيق الفلاتر'
  },

  // Theme & Language
  theme: {
    en: 'Theme',
    ar: 'الثيم'
  },
  lightMode: {
    en: 'Light Mode',
    ar: 'الوضع الفاتح'
  },
  darkMode: {
    en: 'Dark Mode',
    ar: 'الوضع الداكن'
  },
  systemDefault: {
    en: 'System Default',
    ar: 'الإعدادات الافتراضية'
  },
  language: {
    en: 'Language',
    ar: 'اللغة'
  },
  english: {
    en: 'English',
    ar: 'الإنجليزية'
  },
  arabic: {
    en: 'Arabic',
    ar: 'العربية'
  },
  selectLanguage: {
    en: 'Select Language',
    ar: 'اختر اللغة'
  },

  // Forms & Inputs
  name: {
    en: 'Name',
    ar: 'الاسم'
  },
  emailAddress: {
    en: 'Email Address',
    ar: 'البريد الإلكتروني'
  },
  password: {
    en: 'Password',
    ar: 'كلمة المرور'
  },
  confirmPassword: {
    en: 'Confirm Password',
    ar: 'تأكيد كلمة المرور'
  },
  rememberMe: {
    en: 'Remember me',
    ar: 'تذكرني'
  },
  forgotPassword: {
    en: 'Forgot password?',
    ar: 'نسيت كلمة المرور؟'
  },
  submit: {
    en: 'Submit',
    ar: 'إرسال'
  },
  cancel: {
    en: 'Cancel',
    ar: 'إلغاء'
  },
  save: {
    en: 'Save',
    ar: 'حفظ'
  },
  edit: {
    en: 'Edit',
    ar: 'تعديل'
  },
  delete: {
    en: 'Delete',
    ar: 'حذف'
  },
  update: {
    en: 'Update',
    ar: 'تحديث'
  },

  // Buttons & Actions
  loadMore: {
    en: 'Load More',
    ar: 'تحميل المزيد'
  },
  seeAll: {
    en: 'See All',
    ar: 'عرض الكل'
  },
  viewAll: {
    en: 'View All',
    ar: 'عرض الكل'
  },
  showMore: {
    en: 'Show More',
    ar: 'عرض المزيد'
  },
  showLess: {
    en: 'Show Less',
    ar: 'عرض أقل'
  },
  continueReading: {
    en: 'Continue Reading',
    ar: 'استمر في القراءة'
  },
  bookmark: {
    en: 'Bookmark',
    ar: 'إضافة للمفضلة'
  },
  bookmarked: {
    en: 'Bookmarked',
    ar: 'مضاف للمفضلة'
  },
  like: {
    en: 'Like',
    ar: 'أعجبني'
  },
  liked: {
    en: 'Liked',
    ar: 'أعجبني'
  },
  unlike: {
    en: 'Unlike',
    ar: 'إلغاء الإعجاب'
  },

  // Messages & Alerts
  success: {
    en: 'Success!',
    ar: 'نجاح!'
  },
  error: {
    en: 'Error!',
    ar: 'خطأ!'
  },
  warning: {
    en: 'Warning!',
    ar: 'تحذير!'
  },
  info: {
    en: 'Info',
    ar: 'معلومات'
  },
  loading: {
    en: 'Loading...',
    ar: 'جاري التحميل...'
  },
  processing: {
    en: 'Processing...',
    ar: 'جاري المعالجة...'
  },
  pleaseWait: {
    en: 'Please wait...',
    ar: 'يرجى الانتظار...'
  },

  // Error Messages
  errorLoading: {
    en: 'Error loading news',
    ar: 'خطأ في تحميل الأخبار'
  },
  errorLoadingPost: {
    en: 'Error loading post',
    ar: 'خطأ في تحميل المقال'
  },
  postNotFound: {
    en: 'Post not found',
    ar: 'المقال غير موجود'
  },
  noPostsFound: {
    en: 'No posts found',
    ar: 'لم يتم العثور على مقالات'
  },
  tryAgain: {
    en: 'Try Again',
    ar: 'حاول مرة أخرى'
  },
  refresh: {
    en: 'Refresh',
    ar: 'تحديث'
  },
  networkError: {
    en: 'Network error. Please check your connection.',
    ar: 'خطأ في الشبكة. يرجى التحقق من اتصالك.'
  },
  serverError: {
    en: 'Server error. Please try again later.',
    ar: 'خطأ في الخادم. يرجى المحاولة مرة أخرى لاحقاً.'
  },

  // Empty States
  noResults: {
    en: 'No results found',
    ar: 'لم يتم العثور على نتائج'
  },
  noBookmarks: {
    en: 'No bookmarks yet',
    ar: 'لا توجد مفضلات بعد'
  },
  noNotifications: {
    en: 'No notifications',
    ar: 'لا توجد إشعارات'
  },
  noComments: {
    en: 'No comments yet. Be the first to comment!',
    ar: 'لا توجد تعليقات بعد. كن أول من يعلق!'
  },

  // User & Account
  myProfile: {
    en: 'My Profile',
    ar: 'ملفي الشخصي'
  },
  myBookmarks: {
    en: 'My Bookmarks',
    ar: 'مفضلاتي'
  },
  myHistory: {
    en: 'My History',
    ar: 'سجلي'
  },
  notifications: {
    en: 'Notifications',
    ar: 'الإشعارات'
  },
  // settings: {
  //   en: 'Settings',
  //   ar: 'الإعدادات'
  // },
  privacy: {
    en: 'Privacy',
    ar: 'الخصوصية'
  },
  terms: {
    en: 'Terms',
    ar: 'الشروط'
  },
  help: {
    en: 'Help',
    ar: 'مساعدة'
  },
  about: {
    en: 'About',
    ar: 'حول'
  },
  contact: {
    en: 'Contact',
    ar: 'اتصل بنا'
  },

  // Footer
  copyright: {
    en: '© 2024 News Plus. All rights reserved.',
    ar: '© 2024 نيوز بلس. جميع الحقوق محفوظة.'
  },
  privacyPolicy: {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية'
  },
  termsOfService: {
    en: 'Terms of Service',
    ar: 'شروط الخدمة'
  },
  cookiePolicy: {
    en: 'Cookie Policy',
    ar: 'سياسة الكوكيز'
  },
  sitemap: {
    en: 'Sitemap',
    ar: 'خريطة الموقع'
  },

  // Months & Days (for date formatting)
  january: { en: 'January', ar: 'يناير' },
  february: { en: 'February', ar: 'فبراير' },
  march: { en: 'March', ar: 'مارس' },
  april: { en: 'April', ar: 'أبريل' },
  may: { en: 'May', ar: 'مايو' },
  june: { en: 'June', ar: 'يونيو' },
  july: { en: 'July', ar: 'يوليو' },
  august: { en: 'August', ar: 'أغسطس' },
  september: { en: 'September', ar: 'سبتمبر' },
  october: { en: 'October', ar: 'أكتوبر' },
  november: { en: 'November', ar: 'نوفمبر' },
  december: { en: 'December', ar: 'ديسمبر' },

  monday: { en: 'Monday', ar: 'الاثنين' },
  tuesday: { en: 'Tuesday', ar: 'الثلاثاء' },
  wednesday: { en: 'Wednesday', ar: 'الأربعاء' },
  thursday: { en: 'Thursday', ar: 'الخميس' },
  friday: { en: 'Friday', ar: 'الجمعة' },
  saturday: { en: 'Saturday', ar: 'السبت' },
  sunday: { en: 'Sunday', ar: 'الأحد' },
};

export const getTranslation = (lang: Language) => (key: string): string => {
  return translations[key]?.[lang] || key;
};

export const getMonthName = (lang: Language, monthIndex: number): string => {
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];
  return getTranslation(lang)(months[monthIndex]);
};

export const getDayName = (lang: Language, dayIndex: number): string => {
  const days = [
    'sunday', 'monday', 'tuesday', 'wednesday', 
    'thursday', 'friday', 'saturday'
  ];
  return getTranslation(lang)(days[dayIndex]);
};

export const formatDate = (lang: Language, date: Date): string => {
  const day = date.getDate();
  const month = getMonthName(lang, date.getMonth());
  const year = date.getFullYear();
  
  if (lang === 'ar') {
    return `${day} ${month} ${year}`;
  }
  return `${month} ${day}, ${year}`;
};

export const isRTL = (lang: Language): boolean => lang === 'ar';

export const getDirection = (lang: Language): 'rtl' | 'ltr' => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};

// Helper for pluralization
export const pluralize = (
  lang: Language, 
  count: number, 
  singular: string, 
  plural: string
): string => {
  const key = count === 1 ? singular : plural;
  return `${count} ${getTranslation(lang)(key)}`;
};