import { motion } from "framer-motion";
import { bankingApps, arabiMobile, bankingDisclaimer, confidentialityNote, noSourceNote } from "../data/banking";
import { resolveProjectLogo } from "../data/projectImages";
import "./banking.css";

export function Banking() {
  return (
    <section id="banking" className="banking">
      <div className="container">
        <span className="eyebrow">Production Work</span>
        <h2 className="section-heading">Production Banking Applications</h2>
        <p className="section-lead">
          Professional Flutter development across production mobile banking applications at PCNC IT Solutions.
        </p>

        <div className="banking__grid">
          {bankingApps.map((bank, i) => (
            <motion.div
              key={bank.name}
              className="card banking__card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            >
              <div className="banking__mark">
                <img src={resolveProjectLogo(bank.logo)} alt={`${bank.name} logo`} className="banking__mark-img" />
              </div>
              <h3 className="banking__name">{bank.name}</h3>
              <p className="banking__role">{bank.role}</p>
              <div className="banking__badges">
                <span className="tag banking__platform">{bank.platforms}</span>
                <span className="tag banking__flutter">Flutter</span>
              </div>
              {(bank.playStore || bank.appStore) && (
                <div className="banking__links">
                  {bank.appStore && (
                    <a href={bank.appStore} target="_blank" rel="noreferrer" className="banking__store-link focus-ring">
                      App Store <span className="btn__arrow">→</span>
                    </a>
                  )}
                  {bank.playStore && (
                    <a href={bank.playStore} target="_blank" rel="noreferrer" className="banking__store-link focus-ring">
                      Google Play <span className="btn__arrow">→</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="card banking__arabi">
          <div className="banking__arabi-lead">
            <div className="banking__mark banking__mark--arabi">
              <img src={resolveProjectLogo(arabiMobile.logo)} alt={`${arabiMobile.name} logo`} className="banking__mark-img" />
            </div>
            <div>
              <h3 className="banking__name">{arabiMobile.name}</h3>
              <p className="banking__role">{arabiMobile.note}</p>
            </div>
          </div>
          <div className="banking__links">
            <a href={arabiMobile.appStore} target="_blank" rel="noreferrer" className="banking__store-link focus-ring">
              App Store <span className="btn__arrow">→</span>
            </a>
            <a href={arabiMobile.playStore} target="_blank" rel="noreferrer" className="banking__store-link focus-ring">
              Google Play <span className="btn__arrow">→</span>
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
