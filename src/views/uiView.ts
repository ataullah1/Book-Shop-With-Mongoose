interface Styles {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
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
    padding: "4rem 2rem",
    background:
      "linear-gradient(180deg, rgba(15, 15, 26, 0.8) 0%, rgba(26, 26, 46, 0.95) 100%)",
    color: "#94a3b8",
    borderTop: "1px solid rgba(99, 102, 241, 0.2)",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
  },
  footerContent: {
    position: "relative",
    zIndex: "2",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerGlow: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
    opacity: "0.5",
    animation: "rotate 20s linear infinite",
  },
  developerInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "1.5rem",
    flexWrap: "wrap",
  },
  socialLink: {
    color: "#94a3b8",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.8rem",
    padding: "0.8rem 1.5rem",
    borderRadius: "12px",
    background: "rgba(99, 102, 241, 0.1)",
    border: "1px solid rgba(99, 102, 241, 0.2)",
    fontSize: "0.95rem",
    fontWeight: "500",
    backdropFilter: "blur(5px)",
  },
  "@keyframes rotate": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
  "@keyframes pulse": {
    "0%, 100%": { opacity: "0.6" },
    "50%": { opacity: "1" },
  },
  endpointCard: {
    background: "rgba(26, 26, 46, 0.6)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "16px",
    border: "1px solid rgba(99, 102, 241, 0.2)",
    marginBottom: "2rem",
    transition: "all 0.3s ease",
  },
  methodBadge: {
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.9rem",
    display: "inline-block",
    marginBottom: "1rem",
  },
  methodGet: {
    background: "rgba(34, 197, 94, 0.1)",
    color: "#22c55e",
    border: "1px solid rgba(34, 197, 94, 0.2)",
  },
  methodPost: {
    background: "rgba(99, 102, 241, 0.1)",
    color: "#818cf8",
    border: "1px solid rgba(99, 102, 241, 0.2)",
  },
  methodPut: {
    background: "rgba(234, 179, 8, 0.1)",
    color: "#facc15",
    border: "1px solid rgba(234, 179, 8, 0.2)",
  },
  methodDelete: {
    background: "rgba(239, 68, 68, 0.1)",
    color: "#ef4444",
    border: "1px solid rgba(239, 68, 68, 0.2)",
  },
};

const createStyle = (styleObj: {
  [key: string]: string | { [key: string]: string };
}): string => {
  return Object.entries(styleObj)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}`;
      }
      return value;
    })
    .join(";");
};

export const generateUI = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Book Shop API Documentation</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .container {
                background-color: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            h1 {
                color: #2c3e50;
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }
            .endpoint {
                background-color: #f8f9fa;
                padding: 20px;
                margin: 20px 0;
                border-radius: 5px;
                border-left: 4px solid #3498db;
            }
            .method {
                display: inline-block;
                padding: 5px 10px;
                border-radius: 3px;
                color: white;
                font-weight: bold;
                margin-right: 10px;
            }
            .get { background-color: #2ecc71; }
            .post { background-color: #3498db; }
            .put { background-color: #f1c40f; }
            .delete { background-color: #e74c3c; }
            .url {
                color: #34495e;
                font-family: monospace;
                background-color: #ecf0f1;
                padding: 5px;
                border-radius: 3px;
            }
            .section {
                margin: 40px 0;
            }
            .example {
                background-color: #2c3e50;
                color: #ecf0f1;
                padding: 15px;
                border-radius: 5px;
                overflow-x: auto;
            }
            .revenue-section {
                background-color: #e8f5e9;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
                border-left: 4px solid #4caf50;
            }
            .note {
                font-size: 0.9em;
                color: #666;
                font-style: italic;
            }
            .card {
                ${createStyle(styles.card)}
                animation: float 6s ease-in-out infinite;
            }
            
            .card:hover .card-glow {
                opacity: 0.1;
            }
            
            .social-link:hover {
                transform: translateY(-3px);
                background: var(--gradient-primary);
                color: white;
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
            }
            
            @keyframes rotate {
                ${createStyle(styles["@keyframes rotate"])}
            }
            
            @keyframes float {
                ${createStyle(styles["@keyframes float"])}
            }
            
            @keyframes pulse {
                ${createStyle(styles["@keyframes pulse"])}
            }
            
            .endpoint-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
                border-color: rgba(99, 102, 241, 0.4);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>📚 Book Shop API Documentation</h1>

            <div class="section">
                <h2>Products API</h2>
                
                <div class="endpoint">
                    <span class="method post">POST</span>
                    <span class="url">/api/products/create-product</span>
                    <p>Create a new book</p>
                    <div class="example">
                        <pre>
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}</pre>
                    </div>
                </div>

                <div class="endpoint">
                    <span class="method get">GET</span>
                    <span class="url">/api/products</span>
                    <p>Get all books</p>
                </div>

                <div class="endpoint">
                    <span class="method get">GET</span>
                    <span class="url">/api/products/:productId</span>
                    <p>Get a specific book</p>
                </div>

                <div class="endpoint">
                    <span class="method put">PUT</span>
                    <span class="url">/api/products/:productId</span>
                    <p>Update a book</p>
                    <div class="example">
                        <pre>
{
  "price": 15,
  "quantity": 25
}</pre>
                    </div>
                </div>

                <div class="endpoint">
                    <span class="method delete">DELETE</span>
                    <span class="url">/api/products/:productId</span>
                    <p>Delete a book</p>
                </div>
            </div>

            <div class="section">
                <h2>Orders API</h2>
                
                <div class="endpoint">
                    <span class="method post">POST</span>
                    <span class="url">/api/orders/create-order</span>
                    <p>Create a new order</p>
                    <div class="example">
                        <pre>
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2
}</pre>
                    </div>
                </div>

                <div class="endpoint">
                    <span class="method get">GET</span>
                    <span class="url">/api/orders</span>
                    <p>Get all orders</p>
                </div>

                <div class="endpoint">
                    <span class="method get">GET</span>
                    <span class="url">/api/orders/:orderId</span>
                    <p>Get a specific order</p>
                </div>

                <div class="revenue-section">
                    <h3>📊 Revenue Analytics</h3>
                    <div class="endpoint">
                        <span class="method get">GET</span>
                        <span class="url">/api/orders/revenue</span>
                        <p>Calculate total revenue from all orders</p>
                        <div class="example">
                            <pre>
{
  "success": true,
  "message": "Revenue calculated successfully",
  "data": {
    "totalRevenue": 450
  }
}</pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Response Formats</h2>
                
                <div class="endpoint">
                    <h3>Success Response</h3>
                    <div class="example">
                        <pre>
{
  "success": true,
  "message": "Success message here",
  "data": {}
}</pre>
                    </div>
                </div>

                <div class="endpoint">
                    <h3>Error Response</h3>
                    <div class="example">
                        <pre>
{
  "success": false,
  "message": "Error message here",
  "error": "ErrorType",
  "stack": "Error stack trace"
}</pre>
                    </div>
                </div>
            </div>

            <div class="note">
                <p>Note: Replace :productId and :orderId with actual IDs when making requests.</p>
                <p>For testing the API, use tools like Postman or curl.</p>
            </div>
        </div>
        
        <footer style="${createStyle(styles.footer)}">
            <div class="footer-glow" style="${createStyle(
              styles.footerGlow
            )}"></div>
            <div class="footer-content" style="${createStyle(
              styles.footerContent
            )}">
                <p style="font-size: 1.1rem; margin-bottom: 1rem;">© ${new Date().getFullYear()} Book Shop API. All rights reserved.</p>
                <div class="developer-info" style="${createStyle(
                  styles.developerInfo
                )}">
                    <p style="font-size: 1.1rem;">Developed with <span style="color: #ef4444;">❤️</span> by Ataullah</p>
                    <a href="https://github.com/ataullah1" 
                       class="social-link" 
                       style="${createStyle(styles.socialLink)}"
                       target="_blank"
                       rel="noopener noreferrer">
                        <i class="fab fa-github" style="font-size: 1.2rem;"></i> GitHub
                    </a>
                    <a href="https://linkedin.com/in/md-ataullah" 
                       class="social-link" 
                       style="${createStyle(styles.socialLink)}"
                       target="_blank"
                       rel="noopener noreferrer">
                        <i class="fab fa-linkedin" style="font-size: 1.2rem;"></i> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    </body>
    </html>
  `;
};
