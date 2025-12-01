const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/fedkiv-img.jpg"} alt="Oleh Fedkiv" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Oleh Fedkiv</h2>
          <p style={styles.position}>Senior Software engineer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/khrupa-img.jpg"} alt="Denys Khrupa" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Denys Khrupa</h2>
          <p style={styles.position}>Team Lead</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/shnaider-img.jpg"} alt="Denys Shnaider" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Denys Shnaider</h2>
          <p style={styles.position}>CEO Sombra</p>
        </div>
      </div>
    </main>
  );
};

// merge-conflict-1-b

// test merge conflicts 1
const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.8em",
    color: "#2964fbff",
    margin: "0.5em 0 0 0",
    whiteSpace: "nowrap",
  },
};

export default Body;
