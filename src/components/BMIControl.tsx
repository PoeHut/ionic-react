import React from "react";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BMIControl: React.FC<{
  onCalculateBMI: () => void;
  onReset: () => void;
}> = ({ onCalculateBMI, onReset }) => {
  return (
    <IonRow className="ion-text-center">
      <IonCol>
        <IonButton onClick={onCalculateBMI}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>

      <IonCol>
        <IonButton onClick={onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BMIControl;
