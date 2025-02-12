interface Styles {
  [key: string]: {
    [key: string]: string;
  };
}

const styles: Styles = {
  root: {
    "--gradient-primary": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    "--gradient-secondary": "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)",
    "--gradient-dark": "linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%)",
    "--gradient-card": "linear-gradient(145deg, #1e1e2d 0%, #2d2d44 100%)",
    "--primary": "#6366f1",
    "--secondary": "#8b5cf6",
    "--background": "#0f0f1a",
    "--text": "#e2e8f0",
    "--text-light": "#94a3b8",
    "--card-bg": "#1a1a2e",
    "--card-border": "rgba(99, 102, 241, 0.2)",
    "--card-hover": "rgba(99, 102, 241, 0.1)",
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Poppins', sans-serif",
    background: "var(--gradient-dark)",
    color: "var(--text)",
    lineHeight: "1.6",
  },
  navbar: {
    background: "rgba(26, 26, 46, 0.8)",
    backdropFilter: "blur(10px)",
    padding: "1.2rem 2rem",
    borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: "0",
    zIndex: "100",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  logoIcon: {
    fontSize: "2rem",
    filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
  },
  logoText: {
    fontSize: "1.8rem",
    fontWeight: "700",
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
  },
  hero: {
    flex: "1",
    padding: "6rem 2rem",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
  },
  heroContent: {
    marginBottom: "8rem",
    position: "relative",
    zIndex: "1",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "800",
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1.5rem",
    textShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1.4rem",
    color: "var(--text-light)",
    marginBottom: "3rem",
    maxWidth: "800px",
    margin: "0 auto 3rem",
  },
  endpointsSection: {
    marginTop: "4rem",
    position: "relative",
    zIndex: "1",
  },
  endpointsTitle: {
    fontSize: "2.8rem",
    marginBottom: "4rem",
    background: "var(--gradient-secondary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700",
  },
  endpointGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "2.5rem",
    padding: "0 1rem",
  },
  card: {
    background: "var(--gradient-card)",
    padding: "2.5rem",
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    transition: "all 0.4s ease",
    border: "1px solid var(--card-border)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  cardGlow: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background:
      "radial-gradient(circle at 50% 0%, var(--card-hover), transparent 70%)",
    opacity: "0",
    transition: "opacity 0.4s ease",
  },
  cardIcon: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    filter: "drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))",
  },
  cardTitle: {
    color: "var(--text)",
    marginBottom: "1.2rem",
    fontSize: "1.8rem",
    fontWeight: "600",
  },
  cardDescription: {
    color: "var(--text-light)",
    fontSize: "1.1rem",
    marginBottom: "2rem",
  },
  featureList: {
    listStyle: "none",
    margin: "1.5rem 0",
    textAlign: "left",
    width: "100%",
    padding: "0 1rem",
  },
  featureItem: {
    margin: "1rem 0",
    paddingLeft: "1.8rem",
    position: "relative",
    color: "var(--text-light)",
    fontSize: "1.1rem",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    padding: "1rem 2rem",
    borderRadius: "12px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
    fontSize: "1.1rem",
    gap: "0.5rem",
  },
  buttonPrimary: {
    background: "var(--gradient-primary)",
    color: "white",
    boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
  },
  buttonOutline: {
    background: "rgba(99, 102, 241, 0.1)",
    border: "1px solid var(--card-border)",
    color: "var(--text)",
    backdropFilter: "blur(5px)",
  },
  footer: {
    textAlign: "center",
    padding: "3rem 2rem",
    background: "rgba(26, 26, 46, 0.8)",
    color: "var(--text-light)",
    borderTop: "1px solid var(--card-border)",
    backdropFilter: "blur(10px)",
  },
};

const createStyle = (styleObj: { [key: string]: string }): string => {
  return Object.entries(styleObj)
    .map(
      ([key, value]) =>
        `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}`
    )
    .join(";");
};

export const generateUI = (): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Book Shop API</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            :root { ${createStyle(styles.root)} }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
            .animate-fade-in {
                animation: fadeIn 0.8s ease-out forwards;
            }
            .animate-fade-in-delay {
                animation: fadeIn 0.8s ease-out 0.2s forwards;
                opacity: 0;
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            .card-hover:hover {
                transform: translateY(-10px);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
            }
            .card-hover:hover .card-glow {
                opacity: 0.1;
            }
        </style>
    </head>
    <body>
        <div style="${createStyle(styles.container)}">
            <nav style="${createStyle(styles.navbar)}">
                <div style="${createStyle(styles.logo)}">
                    <span style="${createStyle(
                      styles.logoIcon
                    )}" class="animate-float">📚</span>
                    <span style="${createStyle(
                      styles.logoText
                    )}">Book Shop API</span>
                </div>
                <div>
                    <a href="https://github.com/ataullah1/Book-Shop-With-Mongoose" target="_blank"
                       style="text-decoration: none; color: var(--text); margin-left: 2rem; display: flex; align-items: center; gap: 0.5rem; opacity: 0.9; transition: opacity 0.3s ease;" 
                       onmouseover="this.style.opacity='1'" 
                       onmouseout="this.style.opacity='0.9'"
                       >
                       <span style="font-size: 1.2rem;">⭐</span> GitHub
                    </a>
                </div>
            </nav>

            <main style="${createStyle(styles.hero)}">
                <div style="${createStyle(
                  styles.heroContent
                )}" class="animate-fade-in">
                    <h1 style="${createStyle(
                      styles.title
                    )}">Welcome to Book Shop API</h1>
                    <p style="${createStyle(styles.subtitle)}">
                        Experience a modern, powerful RESTful API designed for seamless book management and order processing
                    </p>
                </div>

                <div style="${createStyle(styles.endpointsSection)}">
                    <h2 style="${createStyle(
                      styles.endpointsTitle
                    )}">Explore Our API Endpoints</h2>
                    <div style="${createStyle(styles.endpointGrid)}">
                        <div style="${createStyle(
                          styles.card
                        )}" class="animate-fade-in card-hover">
                            <div class="card-glow" style="${createStyle(
                              styles.cardGlow
                            )}"></div>
                            <div style="${createStyle(
                              styles.cardIcon
                            )}" class="animate-float">📚</div>
                            <h3 style="${createStyle(
                              styles.cardTitle
                            )}">Products API</h3>
                            <p style="${createStyle(
                              styles.cardDescription
                            )}">Comprehensive book inventory management</p>
                            <ul style="${createStyle(styles.featureList)}">
                                <li style="${createStyle(
                                  styles.featureItem
                                )}">✨ Add and update books</li>
                                <li style="${createStyle(
                                  styles.featureItem
                                )}">📊 Track inventory levels</li>
                                <li style="${createStyle(
                                  styles.featureItem
                                )}">🔍 Advanced search capabilities</li>
                            </ul>
                            <a href="/api/products" style="${createStyle({
                              ...styles.button,
                              ...styles.buttonOutline,
                            })}">
                                Explore Products <span style="margin-left: 5px;">→</span>
                            </a>
                        </div>

                        <div style="${createStyle(
                          styles.card
                        )}" class="animate-fade-in-delay card-hover">
                            <div class="card-glow" style="${createStyle(
                              styles.cardGlow
                            )}"></div>
                            <div style="${createStyle(
                              styles.cardIcon
                            )}" class="animate-float">🛍️</div>
                            <h3 style="${createStyle(
                              styles.cardTitle
                            )}">Orders API</h3>
                            <p style="${createStyle(
                              styles.cardDescription
                            )}">Efficient order processing system</p>
                            <ul style="${createStyle(styles.featureList)}">
                                <li style="${createStyle(
                                  styles.featureItem
                                )}">💫 Process orders instantly</li>
                                <li style="${createStyle(
                                  styles.featureItem
                                )}">📦 Real-time tracking</li>
                                <li style="${createStyle(
                                  styles.featureItem
                                )}">📱 Customer management</li>
                            </ul>
                            <a href="/api/orders" style="${createStyle({
                              ...styles.button,
                              ...styles.buttonOutline,
                            })}">
                                Explore Orders <span style="margin-left: 5px;">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer style="${createStyle(styles.footer)}">
                <p>© ${new Date().getFullYear()} Book Shop API. Created by <a href="https://www.linkedin.com/in/md-ataullah/" target="_blank" style="color: var(--secondary); text-decoration: none; transition: color 0.3s ease;">Md Ataullah</a>
            </footer>
        </div>
    </body>
    </html>
  `;
};
