interface Styles {
  [key: string]: {
    [key: string]: string;
  };
}

const styles: Styles = {
  root: {
    "--gradient-primary": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    "--gradient-secondary": "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)",
    "--primary": "#6366f1",
    "--secondary": "#8b5cf6",
    "--background": "#f8fafc",
    "--text": "#1e293b",
    "--text-light": "#64748b",
    "--card-bg": "#ffffff",
    "--card-border": "rgba(99, 102, 241, 0.1)",
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "var(--background)",
    color: "var(--text)",
    lineHeight: "1.6",
  },
  navbar: {
    backgroundColor: "var(--card-bg)",
    padding: "1rem 2rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: "0",
    zIndex: "100",
    backdropFilter: "blur(10px)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoIcon: {
    fontSize: "1.75rem",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "600",
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  hero: {
    flex: "1",
    padding: "4rem 2rem",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heroContent: {
    marginBottom: "6rem",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "700",
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1.5rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "var(--text-light)",
    marginBottom: "2rem",
  },
  heroButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "2rem",
  },
  endpointsSection: {
    marginTop: "4rem",
  },
  endpointsTitle: {
    fontSize: "2.5rem",
    marginBottom: "3rem",
    background: "var(--gradient-secondary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  endpointGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    padding: "0 1rem",
  },
  card: {
    backgroundColor: "var(--card-bg)",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid var(--card-border)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  cardTitle: {
    color: "var(--primary)",
    marginBottom: "1rem",
    fontSize: "1.5rem",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  buttonPrimary: {
    background: "var(--gradient-primary)",
    color: "white",
    boxShadow: "0 4px 6px rgba(99, 102, 241, 0.2)",
  },
  buttonOutline: {
    border: "2px solid transparent",
    background:
      "linear-gradient(var(--card-bg), var(--card-bg)) padding-box, var(--gradient-primary) border-box",
    color: "var(--primary)",
  },
  footer: {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "var(--card-bg)",
    color: "var(--text-light)",
    marginTop: "4rem",
    borderTop: "1px solid var(--card-border)",
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            :root { ${createStyle(styles.root)} }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.8s ease-out forwards;
            }
            .animate-fade-in-delay {
                animation: fadeIn 0.8s ease-out 0.2s forwards;
            }
        </style>
    </head>
    <body>
        <div style="${createStyle(styles.container)}">
            <nav style="${createStyle(styles.navbar)}">
                <div style="${createStyle(styles.logo)}">
                    <span style="${createStyle(styles.logoIcon)}">📚</span>
                    <span style="${createStyle(
                      styles.logoText
                    )}">Book Shop API</span>
                </div>
                <div>
                    <a href="https://github.com/ataullah1/Book-Shop-With-Mongoose" 
                       style="text-decoration: none; color: var(--text); margin-left: 2rem;" target="_blank">
                       ⭐ GitHub
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
                        Discover a Modern RESTful API for Managing Books and Orders
                    </p>
                </div>

                <div style="${createStyle(styles.endpointsSection)}">
                    <h2 style="${createStyle(
                      styles.endpointsTitle
                    )}">Explore Our API Endpoints</h2>
                    <div style="${createStyle(styles.endpointGrid)}">
                        <div style="${createStyle(
                          styles.card
                        )}" class="animate-fade-in">
                            <div style="${createStyle(
                              styles.cardIcon
                            )}">📚</div>
                            <h3 style="${createStyle(
                              styles.cardTitle
                            )}">Products API</h3>
                            <p>Manage your book inventory with ease</p>
                            <ul style="list-style: none; margin: 1.5rem 0; text-align: left; width: 100%;">
                                <li style="margin: 0.5rem 0; padding-left: 1.5rem;">Add new books</li>
                                <li style="margin: 0.5rem 0; padding-left: 1.5rem;">Update inventory</li>
                                <li style="margin: 0.5rem 0; padding-left: 1.5rem;">Track availability</li>
                            </ul>
                            <a href="/api/products" style="${createStyle({
                              ...styles.button,
                              ...styles.buttonOutline,
                            })}">
                                View Products
                            </a>
                        </div>

                        <div style="${createStyle(
                          styles.card
                        )}" class="animate-fade-in-delay">
                            <div style="${createStyle(
                              styles.cardIcon
                            )}">🛍️</div>
                            <h3 style="${createStyle(
                              styles.cardTitle
                            )}">Orders API</h3>
                            <p>Streamline order management</p>
                            <ul style="list-style: none; margin: 1.5rem 0; text-align: left; width: 100%;">
                                <li style="margin: 0.5rem 0; padding-left: 1.5rem;">Process orders</li>
                                <li style="margin: 0.5rem 0; padding-left: 1.5rem;">Track deliveries</li>
                                <li style="margin: 0.5rem 0; padding-left: 1.5rem;">Manage customers</li>
                            </ul>
                            <a href="/api/orders" style="${createStyle({
                              ...styles.button,
                              ...styles.buttonOutline,
                            })}">
                                View Orders
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer style="${createStyle(styles.footer)}">
                <p>&copy; 2024 Book Shop API. All rights reserved.</p>
            </footer>
        </div>
    </body>
    </html>
  `;
};
