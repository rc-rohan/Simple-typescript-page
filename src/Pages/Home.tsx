import React, { Key, useState } from "react";
import {
  ALIGN,
  Button,
  BUTTON_TYPE,
  SIZE,
  TextBody,
  TextHeader,
  PageLayout,
  TabNavigationBar,
  RadioButton,
  RadioGroup,
} from "@evive/ui-kit";
import Navbar from "../Components/Navbar";
import "./Home.scss";
import userData from "../Data/userData";
import Footer from "../Components/Footer";

const HOME_STATICS = {
  NAVIGATION_PANNEL: {
    SELECTED_PANNEL: "opt1",
  },

  EDIT_CTA: {
    ICON_NAME: "fa-regular fa-pen-to-square",
    CTA_TEXT: "Edit Dependents",
  },

  DEPENDENT_DETAILS: {
    ICON_NAME: "fa-solid fa-arrow-right",
    RADIO_GROUP_ID: "DefaultRadioGroup",
    SUBMIT_CTA_TEXT: "Save and Continue",
  },
};

const styles = {
  container: "home__container",
  navigationPannel: "home__navigation-pannel",
  header: {
    container: "home__header-container",
    headerDetails: "home__header-details",
    body: "home__header-body",
  },

  dependentDetails: {
    container: "home__dependent-details-container",
    header: "home__dependent-details__header",
    radioBtnGroup: "home__dependent-details__radio-btn-group",
    radioBtnDescription: "home__dependent-details__radio-btn-description",
    submitBtn: "home__dependent-details__submit-btn",
  },
};

const Home = () => {
  // const [data, setData] = useState({});
  // const [navigationPannel, setNavigationPannel] = useState({});

  //  const onChangeHandler = useCallback(()=>data.filter())
  //  const onClickHandler = useCallback(()=>data.filter())

  const getNavigationPannel = () => {
    return (
      <TabNavigationBar
        className={styles.navigationPannel}
        navList={userData.navigationList}
        // onClickHandler={function noRefCheck() {}}
        selectedId={HOME_STATICS.NAVIGATION_PANNEL.SELECTED_PANNEL} //by default this will come from useState()/props;
      />
    );
  };

  const getHeaderDetails = () => {
    return (
      <div className={styles.header.container}>
        <div className={styles.header.headerDetails}>
          <TextHeader size={SIZE.XL}>
            {userData.dependentsDescription.header}
          </TextHeader>
          <TextBody className={styles.header.body}>
            {userData.dependentsDescription.text}
          </TextBody>
        </div>
        <Button
          iconLocation={ALIGN.LEFT}
          iconName={HOME_STATICS.EDIT_CTA.ICON_NAME}
          type={BUTTON_TYPE.SECONDARY}
        >
          {HOME_STATICS.EDIT_CTA.CTA_TEXT}
        </Button>
      </div>
    );
  };

  const getUsers = (
    user: { id: Key; firstName: string; lastName: string },
    key: Number
  ) => {
    return (
      <div key={user.id}>
        <TextHeader className={styles.dependentDetails.header} size={SIZE.M}>
          {`${user.firstName} ${user.lastName}`}
        </TextHeader>
        <div>
          <RadioGroup
            id={HOME_STATICS.DEPENDENT_DETAILS.RADIO_GROUP_ID}
            className={styles.dependentDetails.radioBtnGroup}
            // onChange={function noRefCheck() {}}
          >
            <RadioButton
              id={`${userData.radioBtnDescription.low.id}-${key}`}
              description={
                <div className={styles.dependentDetails.radioBtnDescription}>
                  <span>{userData.radioBtnDescription.low.doctorVisit}</span>
                  <span>{userData.radioBtnDescription.low.prescription}</span>
                  <span>{userData.radioBtnDescription.low.ctScan}</span>
                </div>
              }
            >
              {userData.radioBtnDescription.low.buttonText}
            </RadioButton>
            <RadioButton
              id={`${userData.radioBtnDescription.medium.id}-${key}`}
              description={
                <div className={styles.dependentDetails.radioBtnDescription}>
                  <span>{userData.radioBtnDescription.medium.doctorVisit}</span>
                  <span>
                    {userData.radioBtnDescription.medium.prescription}
                  </span>
                  <span>{userData.radioBtnDescription.medium.ctScan}</span>
                </div>
              }
            >
              {userData.radioBtnDescription.medium.buttonText}
            </RadioButton>
            <RadioButton
              id={`${userData.radioBtnDescription.high.id}-${key}`}
              description={
                <div className={styles.dependentDetails.radioBtnDescription}>
                  <span>{userData.radioBtnDescription.high.doctorVisit}</span>
                  <span>{userData.radioBtnDescription.high.prescription}</span>
                  <span>{userData.radioBtnDescription.high.ctScan}</span>
                </div>
              }
            >
              {userData.radioBtnDescription.high.buttonText}
            </RadioButton>
          </RadioGroup>
        </div>
      </div>
    );
  };

  const getDepedentsDetails = () => {
    return (
      <div className={styles.dependentDetails.container}>
        {userData.userList.map(getUsers)}
        <Button
          disabled
          iconName={HOME_STATICS.DEPENDENT_DETAILS.ICON_NAME}
          className={styles.dependentDetails.submitBtn}
        >
          {HOME_STATICS.DEPENDENT_DETAILS.SUBMIT_CTA_TEXT}
        </Button>
      </div>
    );
  };

  return (
    <PageLayout className={styles.container}>
      <Navbar />
      {getNavigationPannel()}
      {getHeaderDetails()}
      {getDepedentsDetails()}
      <Footer />
    </PageLayout>
  );
};

export default Home;
