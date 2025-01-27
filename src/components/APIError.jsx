import styles from "../styles/APIError.module.css";

const APIError = () => {
  return (
    <>
      <div className={styles.errorContainer}>
        <h3>Failed to generate, please reload to try again.</h3>
      </div>
    </>
  );
};

export default APIError;
