import { bankingApps, arabiMobile, bankingDisclaimer, confidentialityNote, noSourceNote } from "../data/banking";
import "./banking.css";

export function Banking() {
  return (
    <section id="banking" className="banking">
      <div className="container">
        <span className="eyebrow">Production Work</span>
        <h2 className="section-heading">Production Banking Applications</h2>
        <p className="section-lead">
          Flutter mobile development at PCNC IT Solutions, contributing to live consumer banking
          apps used by real customers across iOS and Android.
        </p>

        <div className="banking__grid">
          {bankingApps.map((bank) => (
            <div key={bank.name} className="card banking__card">
              <h3 className="banking__name">{bank.name}</h3>
              <p className="banking__role">{bank.role}</p>
              <span className="tag banking__platform">{bank.platforms}</span>
              {(bank.playStore || bank.appStore) && (
                <div className="banking__links">
                  {bank.playStore && (
                    <a href={bank.playStore} target="_blank" rel="noreferrer" className="btn btn-secondary focus-ring">
                      Google Play ↗
                    </a>
                  )}
                  {bank.appStore && (
                    <a href={bank.appStore} target="_blank" rel="noreferrer" className="btn btn-secondary focus-ring">
                      App Store ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card banking__arabi">
          <h3 className="banking__name">{arabiMobile.name}</h3>
          <p className="banking__role">{arabiMobile.note}</p>
          <div className="banking__links">
            <a href={arabiMobile.playStore} target="_blank" rel="noreferrer" className="btn btn-secondary focus-ring">
              Google Play ↗
            </a>
            <a href={arabiMobile.appStore} target="_blank" rel="noreferrer" className="btn btn-secondary focus-ring">
              App Store ↗
            </a>
          </div>
        </div>

        <div className="banking__disclaimer">
          <p>{bankingDisclaimer}</p>
          <p>{confidentialityNote}</p>
          <p>{noSourceNote}</p>
        </div>
      </div>
    </section>
  );
}
