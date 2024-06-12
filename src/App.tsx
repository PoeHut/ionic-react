import React, { useState, useRef } from "react";
import {
  IonAlert,
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BMIResult from "./components/BMIResult";
import BMIControl from "./components/BMIControl";
import InputControls from "./components/InputControls";

setupIonicReact();

const App: React.FC = () => {
  const bodyHeightRef = useRef<HTMLIonInputElement>(null);
  const bodyWeightRef = useRef<HTMLIonInputElement>(null);
  const [result, setResult] = useState<number>();
  const [error, setError] = useState<string>();
  const [selectedValue, setSelectedValue] = useState<"mkg" | "ftlbs">("mkg");

  const onCalculateBMI = () => {
    const enteredHeight = Number(bodyHeightRef.current!.value);
    const enteredWeight = Number(bodyWeightRef.current!.value);

    if (
      !enteredHeight ||
      !enteredWeight ||
      enteredHeight <= 0 ||
      enteredWeight <= 0
    ) {
      setError("Please enter your input correctly.");
      return;
    }

    const weightConversionFactor = selectedValue === "ftlbs" ? 2.2 : 1;
    const weight = +enteredWeight / weightConversionFactor;

    const bmi = weight / (+enteredHeight * +enteredHeight);

    setResult(bmi);
  };

  const onReset = () => {
    bodyHeightRef.current!.value = "";
    bodyWeightRef.current!.value = "";
  };

  const onSelectedValue = (value: "mkg" | "ftlbs") => setSelectedValue(value);

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        onDidDismiss={() => setError("")}
        header="Warning"
        message={error}
        buttons={["OK"]}
      />

      <IonApp>
        <IonHeader className="ion-margin-bottom">
          <IonToolbar color="primary">
            <IonTitle>Ionic-React</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControls
                  selectedValue={selectedValue}
                  onSelectedValue={onSelectedValue}
                />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Height ({selectedValue === "mkg" ? "meter" : "feet"})
                  </IonLabel>
                  <IonInput ref={bodyHeightRef}></IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Weight ({selectedValue === "mkg" ? "kg" : "lbs"})
                  </IonLabel>
                  <IonInput ref={bodyWeightRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <BMIControl onCalculateBMI={onCalculateBMI} onReset={onReset} />

            {result && <BMIResult result={result} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
