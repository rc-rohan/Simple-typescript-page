import { Button, BUTTON_TYPE, PageLayout, SIZE, TextHeader } from "@evive/ui-kit"
import './Navbar.scss'

const styles = {
  container:"navbar",
  containerContent:"navbar__content",
  contents:{
    headerText:"navbar__content__header",
    logoutBtn:"navbar__content__logoutBtn",
  }
}


const Navbar = () =>{

  return (
    <div className={styles.container}>
      <PageLayout contentClassName={styles.containerContent}>
        <TextHeader
          size={SIZE.M}
          className={styles.contents.headerText}
        >
          Medical Plan
        </TextHeader>
        <Button
          className={styles.contents.logoutBtn}
          type={BUTTON_TYPE.TERTIARY}
        >
          Log out
        </Button>
      </PageLayout>
    </div>
  )
}

export default Navbar;