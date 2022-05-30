import { AnchorButton, PageLayout, SIZE, TextBody } from "@evive/ui-kit";
import { Key } from "react";
import { footer } from "../Data/userData";
import "./Footer.scss";

const styles = {
  container: "footer",
  contentContainer: "footer__content-container",
  disclaimerText: "footer__disclaimer-text",
  navigationLinks: "footer__navigation-links",
  anchorBtn: "footer__navigation-links__anchor-btn",
  anchorSeperator: "footer__navigation-links__anchor-btn--seperator",
};

const Footer = () => {
  const getLinkDetails = (linkItemData: {
    id: Key;
    url: string;
    displayText: string;
  }) => (
    <div>
      <AnchorButton
        key={linkItemData.id}
        href={linkItemData.url}
        className={styles.anchorBtn}
      >
        {linkItemData.displayText}
      </AnchorButton>
      <span className={styles.anchorSeperator}> &#x25CF;</span>
    </div>
  );

  const getFooterLinks = () => (
    <div className={styles.navigationLinks}>
      {footer.links?.map(getLinkDetails)}
      <TextBody size={SIZE.XS}>&#xA9; {footer.copyrightText}</TextBody>
    </div>
  );

  const getDisclaimer = () => (
    <div className={styles.container}>
      <TextBody className={styles.disclaimerText} size={SIZE.XS}>
        {footer.disclaimerText}
      </TextBody>
    </div>
  );
  return (
    <PageLayout className={styles.container}>
      <div className={styles.contentContainer}>
        {getDisclaimer()}
        {getFooterLinks()}
      </div>
    </PageLayout>
  );
};

export default Footer;
