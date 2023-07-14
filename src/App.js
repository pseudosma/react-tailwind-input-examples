import {
  Button,
  Checkbox,
  DateInput,
  RadioButton,
  RangeSlider,
  TextArea,
  TextInput,
  Tooltip
} from "./components";
import React from "react";

const App = () => {
  const [date, setDate] = React.useState();

  return (
    <div className="p-3">
      <h1 className="pb-3">Examples of components with Tailwind styling</h1>
      <hr className="pb-3" />
      <p className="pb-3">Buttons</p>
      <div className="flex flex-row gap-x-3">
        <Button color="primary">Primary</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Warning</Button>
        <Button color="success">Success</Button>
        <Button disabled>Disabled</Button>
      </div>
      <br />
      <hr className="pb-3" />
      <p className="pb-3">Tooltip</p>
      <div className="flex flex-row gap-x-3">
        <Tooltip text="Example of tooltip text" position="top">
          <Button>Tooltip Above Button</Button>
        </Tooltip>
      </div>
      <br />
      <hr className="pb-3" />
      <p className="pb-3">Radio Buttons</p>
      <div className="flex flex-row gap-x-3">
        <RadioButton color="primary" coloredBorder />
        <RadioButton color="warning" />
        <RadioButton color="danger" />
        <RadioButton color="success" coloredBorder />
        <RadioButton color="primary disabled" coloredBorder />
      </div>
      <br />
      <hr className="pb-3" />
      <p className="pb-3">Check Boxes</p>
      <div className="flex flex-row gap-x-5">
        <div>
          <h4>Primary Checkbox</h4>
          <Checkbox color="primary" />
        </div>
        <div>
          <h4>Warning Checkbox</h4>
          <Checkbox color="warning" />
        </div>
        <div>
          <h4>Colored Border (Danger)</h4>
          <Checkbox color="danger" coloredBorder />
        </div>
        <div>
          <h4>Disabled</h4>
          <Checkbox color="danger" disabled />
        </div>
      </div>
      <br />
      <hr className="pb-3" />
      <p className="pb-3">Range Slider</p>
      <div className="flex flex-row gap-x-5">
        <div>
          <h4>Default</h4>
          <RangeSlider />
        </div>
        <div>
          <h4>Colored Track</h4>
          <RangeSlider trackColor="primary" />
        </div>
        <div>
          <h4>Disabled</h4>
          <RangeSlider trackColor="primary" disabled />
        </div>
      </div>
      <br />
      <hr className="pb-3" />
      <p className="pb-3">Text Input</p>
      <div className="flex flex-row gap-x-5">
        <div>
          <h4>Text Input</h4>
          <TextInput accentColor="primary" />
        </div>
        <div>
          <h4>Text Area (Warning)</h4>
          <TextArea accentColor="warning" />
        </div>
        <div>
          <h4>Disabled</h4>
          <TextInput accentColor="primary" disabled />
        </div>
      </div>
      <br />

      <hr className="pb-3" />
      <p className="pb-3">Date Input</p>
      <div className="w-full">
        <DateInput selectedDateString={date} onChange={d => setDate(d)} />
      </div>
      <br />
    </div>
  );
};

export default App;
