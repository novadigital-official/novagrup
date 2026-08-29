"use client";

import { X, ShieldCheck, FileText, Lock, Building } from "lucide-react";

export type LegalModalType = "kvkk" | "gizlilik" | "kullanim" | "kunye" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const contentMap = {
    kvkk: {
      title: "6698 Sayılı KVKK Aydınlatma Metni",
      icon: ShieldCheck,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>NOVA ORGANİZASYON</strong> (“Nova Grup”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin güvenliğine ve gizliliğine azami hassasiyet göstermekteyiz.
          </p>
          <h4 className="text-gold font-semibold text-sm">1. Kişisel Verilerin İşlenme Amacı</h4>
          <p>
            Web sitemizdeki iletişim formları, WhatsApp bağlantıları veya e-posta yoluyla iletilen ad, soyad, telefon numarası ve e-posta adresiniz; yalnızca talep ettiğiniz organizasyon, etkinlik ve personel destek hizmetlerine ilişkin tekliflerin sunulması, sözleşme süreçlerinin yürütülmesi ve kurumsal iletişim amacıyla işlenmektedir.
          </p>
          <h4 className="text-gold font-semibold text-sm">2. Verilerin Aktarılması</h4>
          <p>
            Toplanan kişisel verileriniz, yasal zorunluluklar ve adli/idari makamların resmi talepleri haricinde, açık rızanız olmaksızın üçüncü şahıslara veya ticari kurumlara asla satılmaz, devredilmez veya paylaşılmaz.
          </p>
          <h4 className="text-gold font-semibold text-sm">3. KVKK 11. Madde Kapsamındaki Haklarınız</h4>
          <p>
            KVKK’nın 11. maddesi uyarınca dilediğiniz zaman tarafımıza başvurarak verilerinizin işlenip işlenmediğini öğrenme, silinmesini veya düzeltilmesini talep etme hakkına sahipsiniz. Başvurularınızı <strong>iknovaofis@gmail.com</strong> adresine iletebilirsiniz.
          </p>
        </div>
      ),
    },
    gizlilik: {
      title: "Gizlilik ve Çerez (Cookie) Politikası",
      icon: Lock,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>novaorganizasyon7.com.tr</strong> (“Web Sitesi”), kullanıcı deneyimini iyileştirmek, site performansını analiz etmek ve güvenli bağlantı sağlamak amacıyla sınırlı kapsamda teknik çerezler kullanmaktadır.
          </p>
          <h4 className="text-gold font-semibold text-sm">1. Bilgi Güvenliği</h4>
          <p>
            Sitemiz üzerinden iletilen tüm veriler yüksek güvenlikli 256-bit SSL şifreleme protokolleri ile korunmaktadır. Sunucularımızda hassas finansal veya kredi kartı verileri tutulmamaktadır.
          </p>
          <h4 className="text-gold font-semibold text-sm">2. Çerez Yönetimi</h4>
          <p>
            Tarayıcınızın ayarlarını değiştirerek dilediğiniz zaman çerezleri engelleyebilir veya silebilirsiniz. Çerezlerin devre dışı bırakılması sitemizin temel işlevlerini engellemez.
          </p>
        </div>
      ),
    },
    kullanim: {
      title: "Kullanım Şartları ve 5651 Sayılı Kanun Yasal Uyarısı",
      icon: FileText,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Bu web sitesinde yer alan tüm görsel, metin, marka ve tasarım materyalleri <strong>NOVA ORGANİZASYON</strong>’a aittir ve 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile korunmaktadır. İzinsiz kopyalanamaz ve ticari amaçla çoğaltılamaz.
          </p>
          <h4 className="text-gold font-semibold text-sm">1. Sorumluluk Reddi (Disclaimer)</h4>
          <p>
            Web sitemizde yer alan bilgiler genel tanıtım ve bilgilendirme mahiyetindedir. Hizmet kapsamı, resmi sözleşme ve yazılı mutabakatlar çerçevesinde kesinleşir. Web sitesinde yer alan üçüncü taraf dış bağlantıların (WhatsApp, Instagram vb.) içeriklerinden Nova Organizasyon sorumlu tutulamaz.
          </p>
          <h4 className="text-gold font-semibold text-sm">2. 5651 Sayılı Bilişim Mevzuatı Uyumu</h4>
          <p>
            Web sitemiz, 5651 sayılı “İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun” hükümlerine tam uyumlu olarak işletilmektedir.
          </p>
        </div>
      ),
    },
    kunye: {
      title: "Resmi Şirket Künyesi ve İletişim",
      icon: Building,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <p><strong>Ticari Tanıtım Ünvanı:</strong> NOVA ORGANİZASYON & TURİZM YÖNETİMİ</p>
            <p><strong>Operasyon & Yönetim:</strong> Saha Koordinasyon Kurulu</p>
            <p><strong>Resmi Alan Adı:</strong> www.novaorganizasyon7.com.tr</p>
            <p><strong>Kurumsal E-Posta:</strong> iknovaofis@gmail.com</p>
            <p><strong>Kurumsal İletişim / WhatsApp:</strong> +90 505 410 48 00</p>
            <p><strong>Hizmet Bölgesi:</strong> Türkiye Geneli (Antalya, Muğla, İzmir, İstanbul & Tüm Tesisler)</p>
            <p><strong>Faaliyet Alanı:</strong> Turizm, Otelcilik Destek, Etkinlik, Kongre & Organizasyon Yönetimi</p>
          </div>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#0c1324] border border-gold/40 rounded-2xl shadow-2xl shadow-black flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gold/10 text-gold border border-gold/20">
              <Icon size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {current.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {current.body}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-white/[0.02] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gold/20 hover:bg-gold/30 text-gold text-xs font-bold transition-all border border-gold/40 cursor-pointer"
          >
            Anladım & Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
