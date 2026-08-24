export interface BankApp {
  name: string;
  country?: string;
  role: string;
  platforms: string;
  playStore?: string;
  appStore?: string;
  logo: string;
}

export const bankingApps: BankApp[] = [
  {
    name: "Bank of Palestine",
    role: "Contributed to Flutter mobile development (PCNC IT Solutions)",
    platforms: "iOS · Android",
    playStore: "https://play.google.com/store/apps/details?id=com.pcnc.bop",
    appStore: "https://apps.apple.com/us/app/bank-of-palestine/id1038772801",
    logo: "bank-of-palestine.jpg",
  },
  {
    name: "Cairo Amman Bank",
    country: "Palestine",
    role: "Contributed to Flutter mobile development (PCNC IT Solutions)",
    platforms: "iOS · Android",
    playStore: "https://play.google.com/store/apps/details?id=com.pcnc.mbs.cab",
    appStore: "https://apps.apple.com/us/app/cab-mobile-banking-ps/id1625831957",
    logo: "cairo-amman-bank.jpg",
  },
  {
    name: "Arab Islamic Bank",
    country: "Palestine",
    role: "Contributed to Flutter mobile development (PCNC IT Solutions)",
    platforms: "iOS · Android",
    playStore: "https://play.google.com/store/apps/details?id=com.pcnc.aib",
    appStore: "https://apps.apple.com/us/app/arab-islamic-bank-mobile-app/id1439731494",
    logo: "arab-islamic-bank.png",
  },
  {
    name: "Safa Bank",
    role: "Contributed to Flutter mobile development (PCNC IT Solutions)",
    platforms: "iOS · Android",
    playStore: "https://play.google.com/store/apps/details?id=com.safabank.safamobileapp",
    appStore: "https://apps.apple.com/us/app/safa-mobile/id1243247851",
    logo: "safa-bank.png",
  },
  {
    name: "Egyptian Arab Land Bank",
    country: "EALB",
    role: "Contributed to Flutter mobile development (PCNC IT Solutions)",
    platforms: "iOS · Android",
    playStore:
      "https://play.google.com/store/apps/details?id=com.pcnc.ealb.mobilebanking&hl=en",
    appStore: "https://apps.apple.com/il/app/ealb-ps/id6755387138",
    logo: "egyptian-arab-land-bank.png",
  },
];

export const arabiMobile = {
  name: "Arabi Mobile",
  note: "Official Arab Bank mobile banking application — referenced here to show familiarity with the product and ecosystem through Qossay's Arab Bank role, not a claim of development ownership.",
  playStore: "https://play.google.com/store/apps/details?id=com.arabbank.arabimobilev2",
  appStore: "https://apps.apple.com/us/app/arabi-mobile/id1387380275",
  logo: "arab-bank.png",
};

export const bankingDisclaimer =
  "Professional team contribution at PCNC IT Solutions. The applications shown are official public store listings. Qossay's role is described as a team contribution and does not imply sole development or ownership of these applications.";

export const confidentialityNote =
  "Some professional banking and commercial software work cannot be publicly displayed because of proprietary code, client confidentiality, and company ownership restrictions.";

export const noSourceNote =
  "No proprietary source code, credentials, customer data, internal architecture, or confidential screenshots are published here.";
