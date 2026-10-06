import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import { FAHMZINE_ISSUES } from '../../constants/fahmzineIssues';
import styles from './FahmzineLibrary.module.css';

function IssueCard({ issue }) {
    return (
        <Link className={styles.issueCard} to={issue.path}>
            <div className={styles.coverIcon}>
                {issue.cover ? (
                    <img
                        src={issue.cover}
                        alt={`Cover of ${issue.issue}`}
                    />
                ) : (
                    <span aria-hidden='true'>Cover</span>
                )}
            </div>

            <div className={styles.issueInfo}>
                <h3>
                    {issue.issue}
                </h3>
                <p>{issue.description}</p>
            </div>
        </Link>
    );
}

export default function FahmzineLibrary() {
    return (
        <main className={styles.fahmzine}>
            <Helmet>
                <title>FAHMzine Library - OYFA at UVA</title>
            </Helmet>

            <HalfTitle
                header='FAHMzine'
                imgSrc='/images/fahmzine/fahmzine_header.png'
            />

            {FAHMZINE_ISSUES.map((section) => (
                <section
                    key={section.sectionTitle}
                    className={styles.fahmzineSection}
                    aria-label={section.sectionTitle}
                >
                    <h1>{section.sectionTitle}</h1>

                    {section.sectionSubtitle && (
                        <h2>{section.sectionSubtitle}</h2>
                    )}

                    <div className={styles.issuesGrid}>
                        {section.links.map((issue) => (
                            <IssueCard
                                key={issue.issue}
                                issue={issue}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}