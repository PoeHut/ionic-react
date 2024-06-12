import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonRow } from "@ionic/react";

const BMIResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow className="ion-justify-content-center">
      <IonCard>
        <IonCardHeader>
          <IonCardContent>
            Your body mass is {props.result.toFixed(2)}
          </IonCardContent>
        </IonCardHeader>
      </IonCard>
    </IonRow>
  );
};

export default BMIResult;
