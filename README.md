# 📝 Modern Todo Uygulaması

TNC Group Stajım için geliştirdiğim, aktif kullanılabilecek bir projedir.

## ✨ Özellikler

### 🎯 Temel Özellikler
- **Tab Sistemi**: Görevlerinizi kategorilere ayırın (Kişisel, İş, Projeler vb.)
- **Öncelik Seviyeleri**: Görevlere öncelik atayın (Acil, Önemli, Normal)
- **Alt Görevler**: Her göreve detaylı alt görevler ekleyin
- **Gerçek Zamanlı Önizleme**: Tüm aktif görevlerinizi tek bir panelde görüntüleyin
- **Otomatik Kaydetme**: Tüm değişiklikler otomatik olarak yerel depolamada saklanır

### 🎨 Tasarım & UX
- **Minimalist Arayüz**: Dikkat dağıtmayan, odaklanmayı kolaylaştıran tasarım
- **Grid Arka Plan**: Modern AI editör tarzı kare grid arka plan
- **Smooth Animasyonlar**: Framer Motion ile akıcı geçişler ve etkileşimler
- **Dark Mode Desteği**: Sistem temanıza uyumlu otomatik tema
- **Responsive Tasarım**: Her ekran boyutunda mükemmel görünüm

### ⚙️ Teknik Özellikler
- **SOLID Prensipler**: Temiz kod mimarisi ile sürdürülebilir geliştirme
- **TypeScript**: Tip güvenliği ile daha az hata
- **LocalStorage Persistence**: Verileriniz hiç kaybolmaz
- **Optimized Performance**: React 19 ve Next.js 16 ile maksimum performans

## 🛠️ Teknoloji Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org) (App Router)
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [Phosphor React](https://phosphoricons.com)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify)

## 🚀 Kurulum

### Gereksinimler
- Node.js 18.17 veya üzeri
- npm, yarn, pnpm veya bun paket yöneticisi

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repo-url>
cd todo-app
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

4. **Tarayıcınızda açın**
[http://localhost:3000](http://localhost:3000) adresine gidin

## 📖 Kullanım

### Temel İşlemler

**Tab Oluşturma**
- Sol paneldeki `+` butonuna tıklayın
- Tab adını girin ve Enter'a basın

**Görev Ekleme**
1. Öncelik seviyesini seçin (Acil, Önemli, Normal)
2. Görev metnini yazın
3. Enter tuşuna basın veya `+` butonuna tıklayın

**Alt Görev Ekleme**
- Görevin sağındaki 3 nokta menüsüne tıklayın
- "Alt görev ekle" seçeneğini seçin
- Alt görev metnini yazıp Enter'a basın

**Görev Düzenleme**
- Görev metnine tıklayın
- Metni düzenleyin
- ✓ butonuna basın veya Enter tuşuna basın

**Görev Tamamlama**
- Görevin solundaki checkbox'ı işaretleyin
- Tamamlanan görevler otomatik olarak stil değiştirir

## 🏗️ Proje Yapısı

```
todo-app/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Ana sayfa
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global stiller
│
├── src/
│   ├── types/                    # TypeScript tip tanımları
│   │   ├── todo.types.ts         # Todo, SubTask, Priority
│   │   ├── tab.types.ts          # Tab interface
│   │   └── index.ts              # Merkezi export
│   │
│   ├── hooks/                    # Custom React Hooks (SOLID-S)
│   │   ├── useLocalStorage.ts    # Storage yönetimi
│   │   ├── useTabs.ts            # Tab CRUD işlemleri
│   │   ├── useTodos.ts           # Todo CRUD işlemleri
│   │   └── useSubTasks.ts        # SubTask CRUD işlemleri
│   │
│   ├── context/                  # React Context (State yönetimi)
│   │   ├── TodoContext.tsx       # Todo state
│   │   ├── TabContext.tsx        # Tab state
│   │   └── AppProviders.tsx      # Provider wrapper
│   │
│   ├── components/
│   │   ├── layout/               # Layout component'leri
│   │   ├── tabs/                 # Tab sistemi
│   │   ├── todos/                # Todo component'leri
│   │   ├── subtasks/             # Alt görev component'leri
│   │   └── ui/                   # Reusable UI component'leri
│   │
│   ├── utils/                    # Yardımcı fonksiyonlar
│   │   ├── id.utils.ts           # UUID oluşturma
│   │   ├── date.utils.ts         # Tarih işlemleri
│   │   └── storage.utils.ts      # LocalStorage helper
│   │
│   └── constants/                # Sabitler
│       ├── storage.constants.ts  # Storage key'leri
│       └── ui.constants.ts       # UI sabitleri
```

## 🎯 SOLID Prensipleri

Bu proje, yazılım geliştirmede en iyi pratiklerden olan SOLID prensiplerine sadık kalınarak geliştirilmiştir:

- **S**ingle Responsibility: Her hook ve component tek bir işten sorumlu
- **O**pen/Closed: Component'ler değişiklik yapmadan genişletilebilir
- **L**iskov Substitution: Storage implementasyonu değiştirilebilir
- **I**nterface Segregation: Context'ler sadece gerekli olanı expose eder
- **D**ependency Inversion: Component'ler abstraction'lara bağımlı

## 🎨 Renk Paleti

- **Arka Plan**: Zinc-50 / Zinc-950 (dark mode)
- **Kartlar**: White / Zinc-900
- **Vurgu**: Indigo-Purple gradient
- **Acil**: Red-500
- **Önemli**: Orange-500
- **Normal**: Zinc-400

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

Pull request'ler memnuniyetle karşılanır. Büyük değişiklikler için lütfen önce neyi değiştirmek istediğinizi tartışmak üzere bir issue açın.

---

**Versiyon**: 1.0.0
**Son Güncelleme**: Şubat 2025

Keyifli kodlamalar! 🚀
