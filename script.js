/* تنسيق الصفحة العام */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72);
  background-size: cover;
  color: #fff;
  direction: rtl;
  text-align: center;
}

/* خلفية الجسيمات */
#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* تنسيق الهيدر */
header {
  background-color: rgba(44, 62, 80, 0.9);
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

header h1 {
  margin: 0;
  font-size: 2em;
}

/* تنسيق المحتوى الرئيسي */
main {
  padding: 20px;
}

/* ترتيب الكتب */
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

/* تنسيق كل كتاب */
.book {
  background-color: rgba(255, 255, 255, 0.95);
  color: #000;
  width: 300px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0; /* سيظهر بواسطة تأثير الـ GSAP */
  transition: transform 0.2s, box-shadow 0.2s;
}

.book img {
  max-width: 100%;
  border-radius: 5px;
}

.book h2 {
  font-size: 1.3em;
  margin: 10px 0;
}

.book p {
  font-size: 1em;
  line-height: 1.4em;
}

/* تنسيق روابط الكتب */
.book a {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.book a:hover {
  background-color: #2980b9;
}

/* قسم "عن المؤلف" */
.about {
  background-color: rgba(255, 255, 255, 0.95);
  color: #000;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
}

/* تنسيق الفوتر والشريط السفلي - بدون تعديل على روابط التواصل */
footer {
  background-color: rgba(44, 62, 80, 0.9);
  padding: 20px;
  color: #fff;
}

.social-links a {
  margin: 0 10px;
  font-size: 1.5em;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #3498db;
}

/* الاستجابة للشاشات الصغيرة */
@media (max-width: 600px) {
  .books {
    flex-direction: column;
  }
  .book {
    width: 90%;
  }
}
