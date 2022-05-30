import {
  Button,
  BUTTON_TYPE,
  PageLayout,
  SIZE,
  TextHeader,
} from "@evive/ui-kit";
import userData from '../Data/userData'
import "./Navbar.scss";



const styles = {
  container: "navbar__container",
  containerContent: "navbar__content-container",
  content: {
    headerText: "navbar__content__header",
    logoutBtn: "navbar__content__logoutBtn",
  },
};

const Navbar = () => {
  return (
    <div className={styles.container}>
      <PageLayout contentClassName={styles.containerContent}>
        <TextHeader size={SIZE.M} className={styles.content.headerText}>
          {userData.navbar.headerTitle}
        </TextHeader>
        <Button
          className={styles.content.logoutBtn}
          type={BUTTON_TYPE.TERTIARY}
        >
          {userData.navbar.logoutText}
        </Button>
      </PageLayout>
    </div>
  );
};

export default Navbar;
