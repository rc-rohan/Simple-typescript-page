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
import {
  dependentsDescription,
  navigationList,
  radioBtnDescription,
  users,
} from "../Data/userData";
import Footer from "../Components/Footer";

const styles = {
  container:"home",
  dependents: "home__dependent-details",
  navigationPannel: "home__navigation-lists",
  headerContainer: {
    header: "home__header",
    headerDetails: "home__header-details",
    body: "home__header__text-body",
  },

  dependentDetails: {
    heading: "home__dependent-details__header",
    radioBtnGroup: "home__dependent-details__radio-btn-group",
    radioBtnDescription:
      "home__dependent-details__radio-btn-group__description",
    submitBtn: "home__dependent-details__submit-btn",
  },
};

const Home = () => {
  const [data, setData] = useState({});
  const [navigationPannel, setNavigationPannel] = useState({});

  //  const onChangeHandler = useCallback(()=>data.filter())
  //  const onClickHandler = useCallback(()=>data.filter())

  const getNavigationPannel = () => {
    return (
      <TabNavigationBar
        className={styles.navigationPannel}
        navList={navigationList}
        // onClickHandler={function noRefCheck() {}}
        selectedId="opt1"
      />
    );
  };

  const getHeaderDetails = () => {
    return (
      <div className={styles.headerContainer.header}>
        <div className={styles.headerContainer.headerDetails}>
          <TextHeader size={SIZE.XL}>{dependentsDescription.header}</TextHeader>
          <TextBody className={styles.headerContainer.body}>
            {dependentsDescription.text}
          </TextBody>
        </div>
        <Button
          iconLocation={ALIGN.LEFT}
          iconName="edit"
          type={BUTTON_TYPE.SECONDARY}
        >
          Edit Dependents
        </Button>
      </div>
    );
  };

  const getUsers = (user: { id: Key; firstName: string; lastName: string }) => {
    return (
      <div key={user.id}>
        <TextHeader className={styles.dependentDetails.heading} size={SIZE.M}>
          {user.firstName} {user.lastName}
        </TextHeader>
        <div className="">
          <RadioGroup
            id="DefaultRadioGroup"
            className={styles.dependentDetails.radioBtnGroup}
            // onChange={function noRefCheck() {}}
          >
            <RadioButton
              id="default_option_1"
              description={
                <div className={styles.dependentDetails.radioBtnDescription}>
                  <span>{radioBtnDescription.low.doctorVisit}</span>
                  <span>{radioBtnDescription.low.prescription}</span>
                  <span>{radioBtnDescription.low.ctScan}</span>
                </div>
              }
            >
              Low
            </RadioButton>
            <RadioButton
              id="default_option_2"
              description={
                <div className={styles.dependentDetails.radioBtnDescription}>
                  <span>{radioBtnDescription.medium.doctorVisit}</span>
                  <span>{radioBtnDescription.medium.prescription}</span>
                  <span>{radioBtnDescription.medium.ctScan}</span>
                </div>
              }
            >
              Medium
            </RadioButton>
            <RadioButton
              id="default_option_3"
              description={
                <div className={styles.dependentDetails.radioBtnDescription}>
                  <span>{radioBtnDescription.high.doctorVisit}</span>
                  <span>{radioBtnDescription.high.prescription}</span>
                  <span>{radioBtnDescription.high.ctScan}</span>
                </div>
              }
            >
              High
            </RadioButton>
          </RadioGroup>
        </div>
      </div>
    );
  };

  const getDepedentsDetails = () => {
    return (
      <div className={styles.dependents}>
        {users.map(getUsers)}
        <Button
          disabled
          iconName=" fa-arrow-right"
          className={styles.dependentDetails.submitBtn}
        >
          Save and Continue
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
