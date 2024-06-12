import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControls: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelectedValue: (value: "mkg" | "ftlbs") => void;
}> = ({ selectedValue, onSelectedValue }) => {
  return (
    <IonSegment
      color="primary"
      value={selectedValue}
      onIonChange={(event: CustomEvent) => onSelectedValue(event.detail.value)}
    >
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>

      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControls;
