# 🧑‍🎓 Student API with Hono + Drizzle + Neon + Vercel

## 🔗 API Routes

- `GET /students` — ดูนักศึกษาทั้งหมด
- `GET /students/:id` — ดูนักศึกษารายบุคคล
- `POST /students` — เพิ่มนักศึกษาใหม่
- `PUT /students/:id` — แก้ไขข้อมูลนักศึกษา
- `DELETE /students/:id` — ลบนักศึกษา

## 🌐 Deploy on Vercel
1. สร้าง Neon PostgreSQL และเอา DATABASE_URL ไปใส่ใน `.env`
2. บน Vercel:
   - ใส่ Environment Variable ชื่อ `DATABASE_URL`
   - เพิ่มไฟล์ `vercel.json` เพื่อชี้ entry point
3. กด Deploy ได้เลย

## 🧪 ตัวอย่าง `curl`

```bash
curl -X POST https://your-api.vercel.app/students -H "Content-Type: application/json" -d '{
  "studentId": "65050001",
  "firstName": "John",
  "lastName": "Doe",
  "dob": "2002-01-01",
  "gender": "Male"
}'
```
