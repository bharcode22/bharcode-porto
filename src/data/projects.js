const projects = [
  {
    id: 'project-1',
    title: 'Doru Coffee',
    shortDesc: {
      id: 'Landing page modern yang memperkenalkan cita rasa kopi Nusantara dari Doru Coffee kepada para penikmat kopi.',
      en: 'A modern landing page introducing the flavors of Nusantara coffee from Doru Coffee to coffee enthusiasts.',
    },
    longDesc: {
      id: 'Doru Coffee adalah platform brand identity yang dirancang untuk menampilkan secara elegan berbagai varian produk kopi unggulan. Dibangun dengan pendekatan visual glassmorphism yang kontemporer, website ini tidak hanya menampilkan produk, tetapi juga menyampaikan cerita dan pengalaman yang ingin dihadirkan oleh Doru Coffee kepada para pelanggannya.',
      en: 'Doru Coffee is a brand identity platform designed to elegantly showcase various premium coffee product variants. Built with a contemporary glassmorphism visual approach, this website not only displays products but also conveys the story and experience that Doru Coffee wants to deliver to its customers.',
    },
    image: [],
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    github: {
      frontend: 'https://github.com/bharcode22/dudowan.git',
    },
    demo: "https://doru-coffee.netlify.app/",
    year: 2026,
    category: 'Frontend',
    status: 'Completed',
    features: {
      id: [
        'Menerapkan desain glassmorphism modern dengan tema gelap yang elegan',
        'Tampilan responsif sempurna di semua perangkat, dari desktop hingga mobile',
        'Integrasi React Router untuk pengalaman navigasi multi-halaman yang mulus',
        'Halaman proyek dengan sistem grid yang interaktif dan tampilan detail yang informatif',
      ],
      en: [
        'Implements modern glassmorphism design with an elegant dark theme',
        'Perfectly responsive on all devices, from desktop to mobile',
        'React Router integration for a seamless multi-page navigation experience',
        'Project page with an interactive grid system and informative detail view',
      ],
    },
  },
  {
    id: 'project-2',
    title: 'Eluma Property',
    shortDesc: {
      id: 'Ekosisitem properti digital yang mempertemukan pencari rumah dan pemilik properti secara transparan.',
      en: 'A digital property ecosystem connecting homebuyers and property owners transparently.',
    },
    longDesc: {
      id: 'Eluma Property adalah platform marketplace properti full-stack yang dirancang untuk memfasilitasi jual beli dan sewa properti. Proyek ini tidak hanya menghubungkan pembeli dan penjual, tetapi juga menyediakan alat manajemen properti yang komprehensif bagi pengguna individu dan admin platform.',
      en: 'Eluma Property is a full-stack property marketplace platform designed to facilitate the buying, selling, and renting of properties. This project not only connects buyers and sellers but also provides comprehensive property management tools for individual users and platform admins.',
    },
    image: [],
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Nestjs', 'PostgreSQL', 'Cloudflare', 'Contabo'],
    github: {
      frontend: 'https://github.com/bharcode22/fe-eluma.git',
      backend: 'https://github.com/bharcode22/be-eluma.git',
    },
    demo: "https://eluma.netlify.app/",
    year: 2026,
    category: 'Fullstack',
    status: 'In Progress',
    features: {
      id: [
        'Sistem autentikasi yang aman dengan OAuth Google Login',
        'Fitur Libertranslate untuk mendukung pengguna multibahasa secara real-time',
        'Dashboard pengguna yang intuitif untuk mencari, melihat, dan mengelola daftar properti pribadi',
        'Dashboard admin yang powerful untuk memoderasi seluruh konten properti dan manajemen pengguna',
      ],
      en: [
        'Secure authentication system with Google OAuth Login',
        'Libertranslate integration for real-time multilingual user support',
        'Intuitive user dashboard for searching, viewing, and managing personal property listings',
        'Powerful admin dashboard for moderating all property content and user management',
      ],
    },
  },
  {
    id: 'project-3',
    title: 'Telegram Bot',
    shortDesc: {
      id: 'Sistem notifikasi cerdas yang menjembatani komunikasi antara infrastruktur Docker dan pengguna melalui Telegram.',
      en: 'An intelligent notification system bridging communication between Docker infrastructure and users via Telegram.',
    },
    longDesc: {
      id: 'Proyek ini adalah solusi middleware yang berfungsi sebagai pusat komunikasi. Bot Telegram ini secara otomatis menerima pesan dan notifikasi status dari sistem Docker Listener, lalu meneruskannya ke pengguna. Sebaliknya, bot ini juga mampu menerima perintah dari pengguna di Telegram dan mengirimkannya kembali ke sistem untuk dieksekusi, menciptakan sistem loop komunikasi dua arah yang efisien.',
      en: 'This project is a middleware solution functioning as a communication hub. The Telegram Bot automatically receives messages and status notifications from the Docker Listener system, then forwards them to users. Conversely, the bot can also receive commands from Telegram users and send them back to the system for execution, creating an efficient two-way communication loop.',
    },
    image: [],
    tags: ['Nestjs', 'Rabbitmq', 'Telegram Bot API'],
    github: { repo: '' },
    demo: null,
    year: 2025,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'Integrasi penuh dengan Telegram Bot API untuk komunikasi real-time',
        'Arsitektur Pub/Sub dengan RabbitMQ untuk manajemen pesan yang skalabel dan handal',
        'Mampu menerima notifikasi status container dari Docker Listener',
        'Meneruskan perintah dari pengguna Telegram kembali ke sistem untuk otomatisasi',
      ],
      en: [
        'Full integration with the Telegram Bot API for real-time communication',
        'Pub/Sub architecture with RabbitMQ for scalable and reliable message management',
        'Capable of receiving container status notifications from Docker Listener',
        'Forwards commands from Telegram users back to the system for automation',
      ],
    },
  },
  {
    id: 'project-5',
    title: 'Docker Listener',
    shortDesc: {
      id: 'Agen pemantau yang secara real-time melaporkan status container Docker dari setiap Pod ke sistem pusat.',
      en: 'A monitoring agent that reports Docker container statuses in real-time from each Pod to the central system.',
    },
    longDesc: {
      id: 'Docker Listener adalah service mikro yang bertugas sebagai "mata dan telinga" untuk setiap Pod. Layanan ini secara konstan memantau aktivitas container Docker yang berjalan di dalam Pod-nya. Setiap perubahan status (seperti container mati, hidup, atau error) akan segera ditangkap dan dipublikasikan ke message broker untuk diteruskan ke sistem notifikasi seperti Telegram Bot.',
      en: 'Docker Listener is a microservice that acts as the "eyes and ears" for each Pod. This service constantly monitors the activity of Docker containers running within its Pod. Every status change (such as a container dying, starting, or erroring) is immediately captured and published to the message broker to be forwarded to notification systems like Telegram Bot.',
    },
    image: [],
    tags: ['Nestjs', 'RabbitMq', 'Docker API'],
    github: { repo: '' },
    demo: null,
    year: 2024,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'Memanfaatkan Docker API untuk memantau container secara langsung',
        'Mengirimkan notifikasi status container secara real-time melalui RabbitMQ',
        'Dirancang untuk di-deploy di setiap Pod sebagai agen pemantau mandiri',
        'Komponen kunci dalam arsitektur microservices untuk observability infrastruktur',
      ],
      en: [
        'Utilizes the Docker API to monitor containers directly',
        'Sends container status notifications in real-time via RabbitMQ',
        'Designed to be deployed on each Pod as an independent monitoring agent',
        'A key component in a microservices architecture for infrastructure observability',
      ],
    },
  },
  {
    id: 'project-6',
    title: 'Synch File',
    shortDesc: {
      id: 'Layanan sinkronasi file multimedia yang tangguh untuk mendistribusikan aset ke seluruh Pod dalam ekosistem.',
      en: 'A robust multimedia file synchronization service for distributing assets across all Pods in the ecosystem.',
    },
    longDesc: {
      id: 'Synch File adalah service yang menangani distribusi aset-aset besar seperti gambar, audio, dan video. Ketika sebuah file diunggah ke sistem pusat, service ini akan mempublikasikan pesan ke RabbitMQ. Para consumer di setiap Pod kemudian akan menerima pesan tersebut dan mengunduh file dari penyimpanan objek (S3/MinIO), memastikan semua Pod memiliki salinan file yang sama.',
      en: 'Synch File is a service that handles the distribution of large assets such as images, audio, and video. When a file is uploaded to the central system, this service publishes a message to RabbitMQ. Consumers on each Pod then receive the message and download the file from object storage (S3/MinIO), ensuring all Pods have the same copy of the file.',
    },
    image: [],
    tags: ['Node.js', 'RabbitMq', 'AWS S3', 'MinIO'],
    github: { repo: '' },
    demo: null,
    year: 2025,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'Arsitektur Pub/Sub yang handal untuk orkestrasi distribusi file',
        'Integrasi dengan penyimpanan objek cloud (S3) dan on-premise (MinIO)',
        'Mendukung berbagai tipe file multimedia: gambar, audio, video, dan lainnya',
        'Memastikan konsistensi data di seluruh lingkungan yang terdistribusi',
      ],
      en: [
        'Reliable Pub/Sub architecture for file distribution orchestration',
        'Integration with cloud (S3) and on-premise (MinIO) object storage',
        'Supports various multimedia file types: images, audio, video, and more',
        'Ensures data consistency across distributed environments',
      ],
    },
  },
  {
    id: 'project-7',
    title: 'Wa Alert',
    shortDesc: {
      id: 'Sistem alerting yang meneruskan pesan dari jaringan MQTT langsung ke grup WhatsApp untuk monitoring cepat.',
      en: 'An alerting system that forwards messages from the MQTT network directly to WhatsApp groups for quick monitoring.',
    },
    longDesc: {
      id: 'Wa Alert adalah bridge yang menghubungkan dunia IoT (MQTT) dengan komunikasi sehari-hari (WhatsApp). Layanan ini subscribe ke topik-topik tertentu di broker MQTT. Ketika ada pesan masuk, seperti alert dari sensor atau perangkat, service ini akan langsung memformat dan mengirimkannya ke grup WhatsApp yang telah ditentukan, memungkinkan tim untuk mendapatkan notifikasi penting secara instan.',
      en: 'Wa Alert is a bridge connecting the IoT world (MQTT) with everyday communication (WhatsApp). This service subscribes to specific topics on the MQTT broker. When a message arrives, such as an alert from a sensor or device, this service immediately formats and sends it to the designated WhatsApp group, allowing teams to receive important notifications instantly.',
    },
    image: [],
    tags: ['MQTT', 'Node.js', 'WhatsApp Web.js'],
    github: { repo: '' },
    demo: null,
    year: 2026,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'Subscribe ke berbagai topik MQTT untuk menerima data dari perangkat IoT',
        'Mengirim notifikasi otomatis ke grup WhatsApp menggunakan library WhatsApp Web',
        'Ideal untuk sistem monitoring dan alerting real-time',
        'Menjembatani protokol IoT (MQTT) dengan platform komunikasi populer',
      ],
      en: [
        'Subscribes to various MQTT topics to receive data from IoT devices',
        'Automatically sends notifications to WhatsApp groups using the WhatsApp Web library',
        'Ideal for real-time monitoring and alerting systems',
        'Bridges the IoT protocol (MQTT) with a popular communication platform',
      ],
    },
  },
  {
    id: 'project-8',
    title: 'Jenkins API',
    shortDesc: {
      id: 'REST API kustom untuk mengotomatisasi dan mengelola pipeline CI/CD di Jenkins secara terprogram.',
      en: 'A custom REST API to automate and programmatically manage CI/CD pipelines in Jenkins.',
    },
    longDesc: {
      id: 'Proyek ini adalah lapisan abstraksi di atas Jenkins. Alih-alih mengakses Jenkins UI secara manual, tim dapat menggunakan REST API ini untuk memicu build, melihat status pipeline, atau mengkonfigurasi job. Dibangun dengan Python, API ini menyediakan cara yang lebih terstruktur dan aman untuk mengintegrasikan Jenkins ke dalam alur kerja otomatisasi yang lebih besar.',
      en: 'This project is an abstraction layer on top of Jenkins. Instead of manually accessing the Jenkins UI, teams can use this REST API to trigger builds, view pipeline status, or configure jobs. Built with Python, this API provides a more structured and secure way to integrate Jenkins into larger automation workflows.',
    },
    image: [],
    tags: ['Python', 'Flask/FastAPI', 'Jenkins', 'PostgreSQL'],
    github: { repo: '' },
    demo: null,
    year: 2025,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'REST API yang dibangun dengan Python untuk berinteraksi dengan Jenkins',
        'Autentikasi berbasis JWT untuk keamanan akses endpoint',
        'Menyimpan log aktivitas dan histori build ke database PostgreSQL',
        'Kemampuan untuk memicu job, melihat status, dan mengambil log build',
      ],
      en: [
        'REST API built with Python to interact with Jenkins',
        'JWT-based authentication for secure endpoint access',
        'Stores activity logs and build history in a PostgreSQL database',
        'Ability to trigger jobs, view status, and retrieve build logs',
      ],
    },
  },
  {
    id: 'project-9',
    title: 'Synch Data',
    shortDesc: {
      id: 'Layanan sinkronasi data utama yang memastikan konsistensi informasi di seluruh Pod yang terdistribusi.',
      en: 'The primary data synchronization service ensuring information consistency across all distributed Pods.',
    },
    longDesc: {
      id: 'Synch Data adalah tulang punggung untuk konsistensi data di lingkungan terdistribusi. Ketika ada perubahan data di sistem pusat, service ini akan mempublikasikan event perubahan tersebut ke RabbitMQ. Seluruh Pod yang terhubung akan menerima event ini dan memperbarui basis data lokal mereka, memastikan semua bagian dari sistem memiliki informasi yang selalu terkini.',
      en: 'Synch Data is the backbone for data consistency in a distributed environment. When there is a data change in the central system, this service publishes the change event to RabbitMQ. All connected Pods receive this event and update their local databases, ensuring all parts of the system always have up-to-date information.',
    },
    image: [],
    tags: ['Node.js', 'Express', 'RabbitMq', 'PostgreSQL'],
    github: { repo: '' },
    demo: null,
    year: 2024,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'Arsitektur event-driven menggunakan Pub/Sub untuk skalabilitas',
        'Menjaga konsistensi data antar Pod secara real-time',
        'Mengurangi beban query langsung ke database pusat',
        'Komponen vital untuk sistem yang membutuhkan high availability dan distribusi data',
      ],
      en: [
        'Event-driven architecture using Pub/Sub for scalability',
        'Maintains data consistency between Pods in real-time',
        'Reduces direct query load on the central database',
        'A vital component for systems requiring high availability and data distribution',
      ],
    },
  },
  {
    id: 'project-10',
    title: 'Consume Data',
    shortDesc: {
      id: 'Mekanisme bootstrap untuk Pod baru agar dapat menyelaraskan data dari sistem pusat saat pertama kali menyala.',
      en: 'A bootstrap mechanism for new Pods to synchronize data from the central system upon first startup.',
    },
    longDesc: {
      id: 'Consume Data adalah mekanisme "catch-up" untuk Pod. Ketika sebuah Pod baru dinyalakan atau terhubung kembali setelah sekian lama offline, ia mungkin ketinggalan banyak data. Service ini bertugas untuk melakukan request ke API pusat dan mengambil semua data terbaru yang diperlukan, memastikan Pod tersebut memiliki state yang benar sebelum mulai beroperasi secara normal.',
      en: 'Consume Data is a "catch-up" mechanism for Pods. When a new Pod starts up or reconnects after a long offline period, it may have missed a lot of data. This service requests data from the central API and fetches all the latest required data, ensuring the Pod has the correct state before starting normal operations.',
    },
    image: [],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Axios'],
    github: { repo: '' },
    demo: null,
    year: 2025,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'REST API client yang dibuat dengan Node.js dan Axios untuk komunikasi antar-service',
        'Mekanisme sinkronasi data inisial untuk Pod yang baru bergabung',
        'Handling error dan retry logic untuk koneksi yang tidak stabil',
        'Memastikan Pod selalu memiliki dataset yang lengkap dan valid',
      ],
      en: [
        'REST API client built with Node.js and Axios for inter-service communication',
        'Initial data synchronization mechanism for newly joined Pods',
        'Error handling and retry logic for unstable connections',
        'Ensures Pods always have a complete and valid dataset',
      ],
    },
  },
  {
    id: 'project-11',
    title: 'Consume File',
    shortDesc: {
      id: 'Layanan bootstrap untuk Pod baru yang memastikan semua file multimedia yang diperlukan telah tersedia secara lokal.',
      en: 'A bootstrap service for new Pods ensuring all required multimedia files are available locally.',
    },
    longDesc: {
      id: 'Consume File adalah pendamping dari Synch File yang berfokus pada inisialisasi. Ketika sebuah Pod pertama kali aktif, service ini akan mengecek file mana saja yang belum dimiliki secara lokal. Ia kemudian akan mengunduh file-file yang diperlukan dari storage S3/MinIO, memastikan Pod siap melayani permintaan yang membutuhkan aset-aset tersebut tanpa perlu streaming dari pusat.',
      en: 'Consume File is the companion to Synch File, focused on initialization. When a Pod first becomes active, this service checks which files are not yet available locally. It then downloads the necessary files from S3/MinIO storage, ensuring the Pod is ready to serve requests requiring those assets without streaming from the central system.',
    },
    image: [],
    tags: ['Node.js', 'Express', 'AWS S3', 'MinIO'],
    github: { repo: '' },
    demo: null,
    year: 2025,
    category: 'Backend',
    status: 'Completed',
    features: {
      id: [
        'REST API untuk mengelola sinkronasi file pada inisialisasi Pod',
        'Integrasi dengan S3 dan MinIO untuk transfer file yang efisien',
        'Mekanisme pengecekan integritas file setelah unduhan',
        'Mengurangi latency dengan memastikan file tersedia secara lokal (caching)',
      ],
      en: [
        'REST API for managing file synchronization during Pod initialization',
        'Integration with S3 and MinIO for efficient file transfer',
        'File integrity verification mechanism after download',
        'Reduces latency by ensuring files are available locally (caching)',
      ],
    },
  }
];

export default projects;
