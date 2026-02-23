import React, { useEffect, useState } from "react";
import "./opensource.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { meta } from "../../content_option";
import { FiExternalLink } from "react-icons/fi";


export const OpenSource = () => {
  const [prs, setPRs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPRs() {
      try {
        const res = await fetch(
          "https://api.github.com/search/issues?q=author:JANVI-CHATURVEDI+type:pr&sort=created&order=desc",
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );
        const data = await res.json();

        const updatedPRs = await Promise.all(
          data.items.map(async (pr) => {
            const repoUrlParts = pr.repository_url.split("/");
            const owner = repoUrlParts[repoUrlParts.length - 2];
            const repo = repoUrlParts[repoUrlParts.length - 1];
            let status = pr.state.toUpperCase();

            if (pr.state === "closed") {
              const mergeRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/pulls/${pr.number}/merge`,
                {
                  headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                  },
                }
              );
              if (mergeRes.status === 204) status = "MERGED";
            }
            return { ...pr, status, repo };
          })
        );
        setPRs(updatedPRs);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch PRs:", err);
        setLoading(false);
      }
    }
    fetchPRs();
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Open Source | {meta.title}</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Open Source</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Contributions</h3>
            <p>A real-time feed of my latest pull requests across various production repositories.</p>
          </Col>
          <Col lg="7">
            {loading ? (
              <div className="text-center py-5">
                <Spinner animation="border" variant="secondary" />
                <p className="mt-3">Fetching PRs from GitHub...</p>
              </div>
            ) : (
              <div className="pr_list">
                {prs.map((pr) => (
                  <div className="pr_card mb-4 p-4" key={pr.id}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <span className={`status_badge ${pr.status.toLowerCase()}`}>
                          {pr.status}
                        </span>
                        <h5 className="pr_title mt-2">{pr.title}</h5>
                        <p className="repo_name">
                          Repository: <strong>{pr.repo}</strong>
                        </p>
                      </div>
                      <a
                        href={pr.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr_link"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};