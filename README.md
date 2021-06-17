# init-node-typescript

node version 14.17.0
npm version 6.14.13

Install it and run:

```install
npm install
npm run dev
# or
yarn
yarn dev
```

build src

```build
npm run build
```

migration

```migration
# สร้าง migration
npx sequelize migration:generate --name (ชื่อ)

# สร้างฐานข้อมูล
npx sequelize db:migrate

## ลบฐานข้อมูล
npx sequelize db:migrate:undo:all
```

อัพโมเดลจาก ฐานข้อมูล

```up-models
npm run up-models
```
