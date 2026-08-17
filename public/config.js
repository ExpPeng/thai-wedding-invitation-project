/* ================================================================
   ข้อมูลงานแต่งงาน — แก้ไขไฟล์นี้ไฟล์เดียวพอ
   รูปภาพ: แทนที่ไฟล์ใน assets/images/ ด้วยรูปจริงได้เลย
   เพลง:   แทนที่ไฟล์ assets/music/wedding.mp3
   ================================================================ */
window.WEDDING_CONFIG = {
  couple: {
    groomNick: "ท๊อป",
    brideNick: "นก",
    groomName: "ประวิทย์ แสนเริง",
    brideName: "วิไลวรรณ บุญทั่ง",
  },

  weddingDate: "2026-12-20T07:09:00+07:00", // 20 ธันวาคม 2569
  weddingDateText: "20 ธันวาคม 2569",
  weddingMessage: "ขอเชิญร่วมเป็นส่วนหนึ่งในวันสำคัญของเรา",

  heroImage: "assets/images/hero.svg",

  groom: {
    name: "ประวิทย์ แสนเริง",
    nickname: "ท๊อป",
    birthday: "31 ตุลาคม 2543",
    hobby: "ล้างรถ",
    special: "เป็นคนรักความสะอาด เห็นรถไม่ได้ต้องล้างทันที 🚗✨",
    image: "assets/images/groom.svg",
  },

  bride: {
    name: "วิไลวรรณ บุญทั่ง",
    nickname: "นก",
    birthday: "25 พฤษภาคม 2544",
    hobby: "เลี้ยงหลาน",
    special: "ผู้เชี่ยวชาญด้านการเลี้ยงหลาน และมีรอยยิ้มที่ทำให้คนรอบข้างใจฟู ❤️",
    image: "assets/images/bride.svg",
  },

  schedule: [
    { time: "07:09 น.", title: "พิธีสงฆ์" },
    { time: "09:09 น.", title: "ผูกข้อไม้ข้อมือ" },
    { time: "10:39 น.", title: "ร่วมรับประทานอาหาร" },
  ],

  venue: "บ้านเลขที่ 19 ซอยประชาอุทิศ 21\nแขวงบางมด เขตทุ่งครุ\nกรุงเทพมหานคร",
  mapUrl: "https://maps.app.goo.gl/U4a6wvW3RxnH8xCL7",
  parkingMapUrl: "https://maps.app.goo.gl/PQnBJtWKybbzqjH47",

  bank: {
    bankName: "กสิกรไทย",
    accountName: "วิไลวรรณ บุญทั่ง",
    accountNumber: "0666666666",
    qrImage: "assets/images/bank-qr.svg",
  },

  gallery: [
    "assets/images/gallery/01.svg",
    "assets/images/gallery/02.svg",
    "assets/images/gallery/03.svg",
    "assets/images/gallery/04.svg",
    "assets/images/gallery/05.svg",
    "assets/images/gallery/06.svg",
    "assets/images/gallery/07.svg",
    "assets/images/gallery/08.svg",
    "assets/images/gallery/09.svg",
    "assets/images/gallery/10.svg",
    "assets/images/gallery/11.svg",
    "assets/images/gallery/12.svg",
    "assets/images/gallery/13.svg",
    "assets/images/gallery/14.svg",
    "assets/images/gallery/15.svg",
    "assets/images/gallery/16.svg",
    "assets/images/gallery/17.svg",
    "assets/images/gallery/18.svg",
  ],

  music: "assets/music/wedding.mp3",

  // Lovable Cloud (ใช้ public key เท่านั้น — ห้ามใส่ service role key)
  supabaseUrl: "https://gerlwwpsvicxtarwocvp.supabase.co",
  supabaseKey: "sb_publishable_mRn63Q4lm1Vf0jVIqjyVxg_5SqV8sFw",
};
