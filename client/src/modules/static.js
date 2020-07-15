export const ageRange = (data, key) => data[key];

export const gender = (data, key) => data[key] || 'اهمیت ندارد';

export const languageGrade = (data, key) => data[key];

export const educationGrade = (data, key) => data[key];

export const military = (data, key) => data[key] || data.all;

export const messageValidator = {
  require: 'این فیلد اجباری است',
  invalid: 'لطفا مقدار صحیح وارد کنید',
  email: 'ایمیل وارد شده صحیح نیست',
  url: 'ادرس وارد شده صحیح نمی باشد',
  phoneNumber: 'شماره تماس وارد شده صحیح نیست',
  nationalCode: 'کد ملی وارد شده صحیح نیست',
  number: 'لطفا عدد وارد کنید',
  noNumber: 'شما اجازه ندارید تنها عدد وارد کنید.',
  code: 'لطفا کد را کامل وارد کنید',
  length4000: 'شما اجازه ندارید متن طولانی تر از 4000 کاراکتر داشته باشید.',
  password: 'گذرواژه ها یکسان نیستند',
  canselAppointment: 'توضیح درباره لغو نوبت الزامی میساشد',
  persianChar: 'این فیلد فقط شامل حروف الفبای فارسی میباشد',
  min3char: 'این فیلد حداقل شامل ۳ کاراکتر میباشد',
  max2mb: 'این فیلد حداکثر ۲ مکابایت باید باشد',
  max10item: 'شما اجازه ندارید بیشتر از 10 گزینه انتخاب کنید',
  height: 'حداکثر مقدار ۲۵۰ سانتی متر میباشد',
  weight: 'حداکثر مقدار ۲۵۰ سانتی متر میباشد',
  articleTitleLength150:
    'شما اجازه ندارید متن طولانی تر از 150 کاراکتر داشته باشید.',
  articleContentLength4000:
    'شما اجازه ندارید متن طولانی تر از 4000 کاراکتر داشته باشید.',
  commentTitleLength75:
    'شما اجازه ندارید متن طولانی تر از 75 کاراکتر داشته باشید.',
  commentContentLength700:
    'شما اجازه ندارید متن طولانی تر از 700 کاراکتر داشته باشید.',
  questionTitleLength150:
    'شما اجازه ندارید متن طولانی تر از 150 کاراکتر داشته باشید.',
  questionContentLength500:
    'شما اجازه ندارید متن طولانی تر از 500 کاراکتر داشته باشید.',
};

export const emptyMessage = {
  noResult: 'متاسفانه هیچ نتیجه‌ای یافت نشد',
  noSubject: 'موضوع مورد نظر یافت نشد',
  noData: 'داده‌ای موجود نیست',
};
