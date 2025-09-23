import { useEffect, useMemo } from 'react';
import AppearingDiv from '../../../../../components/ui/AppearingDiv/AppearingDiv'; // adjust if needed
import styles from './FamHeadInsta.module.css';

/**
 * Props:
 *  fams: same array you already pass to the gallery (from constants/famHeadBio)
 *  handlesByFam?: { [famName: string]: string }     // e.g., { AMIHAN: 'oyfaamihan', ... }
 *  postsByFam?:   { [famName: string]: string }     // e.g., { AMIHAN: 'https://www.instagram.com/p/XXXX/' }
 *  title?: string
 */
export default function FamHeadInsta({ fams = [], handlesByFam = {}, postsByFam = {}, title = 'Family Instagrams' }) {
  // Build a card list aligned to fam order
  const cards = useMemo(() => {
    return fams
      .map(f => {
        const handle = handlesByFam[f.famName];
        if (!handle) return null; // skip if no handle defined
        return {
          famName: f.famName,
          handle,
          profileUrl: `https://www.instagram.com/${handle}/`,
          postUrl: postsByFam[f.famName] || null,
          cardImg: f.famImgSrc, // image makes card too long, blank for now
        };
      })
      .filter(Boolean);
  }, [fams, handlesByFam, postsByFam]);

  // Load/re-run Instagram embed
  useEffect(() => {
    const ID = 'instagram-embed-js';
    const ensureScript = () => {
      if (!document.getElementById(ID)) {
        const s = document.createElement('script');
        s.id = ID;
        s.async = true;
        s.defer = true;
        s.src = 'https://www.instagram.com/embed.js';
        document.body.appendChild(s);
        s.onload = () => window.instgrm?.Embeds?.process();
      } else {
        window.instgrm?.Embeds?.process();
      }
    };
    ensureScript();
  }, [cards]);

  if (!cards.length) return null;

  return (
    <section className={styles.section}>
      {title && <h1 className={styles.heading}>{title}</h1>}
      <div className={styles.grid}>
        {cards.map((c, i) => (
          <AppearingDiv key={c.famName} className={styles.card} delay={((i % 3) + 1) * 0.12}>
            {/* Top image */}
            {c.cardImg && (
              <div className={styles.banner}>
                <img
                  src={c.cardImg}
                  alt={`${c.famName} banner`}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            )}

            {/* Header */}
            <header className={styles.cardHeader}>
              <div className={styles.meta}>
                <h2 className={styles.famName}>{c.famName}</h2>
                <a className={styles.handle} href={c.profileUrl} target="_blank" rel="noreferrer">
                  @{c.handle}
                </a>
              </div>
              <a className={styles.followBtn} href={c.profileUrl} target="_blank" rel="noreferrer">
                Follow
              </a>
            </header>

            {/* Embed (post/reel) */}
            <div className={styles.embedWrap}>
              {c.postUrl ? (
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`${c.postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  data-instgrm-captioned
                  style={{ background: '#fff', border: 0, margin: 0, padding: 0, width: '100%', maxWidth: 540 }}
                />
              ) : (
                <div className={styles.placeholder}>
                  <p>No post configured</p>
                  <a className={styles.smallLink} href={c.profileUrl} target="_blank" rel="noreferrer">
                    Open profile →
                  </a>
                </div>
              )}
            </div>
          </AppearingDiv>
        ))}
      </div>
    </section>
  );
}
