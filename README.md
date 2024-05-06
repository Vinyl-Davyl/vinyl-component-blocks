<p align="center">
  <a href="https://www.npmjs.com/package/vinyl-component-blocks">
     <img src="./src/assets/vc-logo.png" alt="VC logo" width="100" />
  </a>
</p>

<h1 align="center">Vinyl Component Blocks ⚡️</h1>
<br />

<p align="center">
<img alt="Bundle Size (Brotli)" src="https://badgen.net/bundlephobia/brotli/@vinyl-component-blocks?color=blue">
<img alt="Version" src="https://img.shields.io/badge/version-1.1.7-orange.svg?cacheSeconds=2592000" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat">
<img alt="Code Coverage" src="https://img.shields.io/coveralls/Vinyl-Davyl/vinyl-component-blocks?style=flat&color=lightblue">
<a href="https://github.com/Vinyl-Davyl/vinyl-component-blocks/blob/main/CONTRIBUTING.md">
  <img alt="Contribution Guidelines" src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat">
</a>
<a href="https://vinyldavyl.xyz">
  <img alt="Website" src="https://img.shields.io/badge/Author-vinyldavyl.xyz-brightgreen.svg?style=flat">
</a>

</p>

<br />

<p align="center">
   Vinyl Component Blocks is a UI component library designed to help you quickly build beautiful and functional user interfaces for your web applications. This library provides a collection of reusable and customizable React components that cover a wide range of UI elements.
</p>

<br />

## Introduction

Offering a set of commonly used components that are designed to be easy to use, highly customizable, and visually appealing. Whether you're building a simple login form, a complex dashboard interface or seeking inspiration while building components in your development process, Vinyl Component(VC) Blocks has the basic components you need to create a polished user experience.

<br />

## Installation and Setup 🧱

You can install Vinyl Component Blocks via npm or yarn:

```bash
npm install vinyl-component-blocks
```

or

```bash
yarn add vinyl-component-blocks
```

## Usage

Once installed, you can import the components you need from Vinyl Component Blocks and use them in your React application:

```jsx
import React from "react";
import {
  Button,
  FormControl,
  Link,
  Search,
  Select,
  Skeleton,
  Spinner,
  TextInput,
  Typography,
  Avatar,
  Card,
  Modal,
  Header,
} from "vinyl-component-blocks";
```

### Demo Example Combining Components

```jsx
import React from "react";
import { Button, Card, Avatar } from "vinyl-component-blocks";

const DemoComponent = () => (
  <div>
    <Card backgroundColor="#f0f0f0" padding="20px">
      <Avatar imageSrc="https://example.com/avatar.jpg" />
      <h2>John Doe</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button type="primary" size="medium">
        Read More
      </Button>
    </Card>
  </div>
);

export default DemoComponent;
```

<br />

- Providing a hands-on experience with the Vinyl Component Blocks library, showcasing the versatility and functionality of each component. Key components here include the `Header` and `Login` UI components.

<br />

```jsx
import React from "react";
import { Button, Card, Avatar, Header, Login } from "vinyl-component-blocks";

const DemoComponent = () => (
  <div>
    <Header
      user={{ name: "John Doe" }}
      onLogout={() => console.log("Logged out")}
    />
    <Card backgroundColor="#f0f0f0" padding="20px">
      <Avatar imageSrc="https://example.com/avatar.jpg" />
      <h2>John Doe</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button type="primary" size="medium">
        Read More
      </Button>
    </Card>
    <Login
      onLogin={() => console.log("Logged in")}
      onCreateAccount={() => console.log("Creating account")}
    />
  </div>
);

export default DemoComponent;
```

## Components

### Button

| Prop      | Type        | Description                                                 |
| --------- | ----------- | ----------------------------------------------------------- |
| type      | string      | Button type (`default`, `danger`, `ghost`, `secondary` )    |
| size      | string      | Button size (`default`, `large`, `small`)                   |
| disabled  | boolean     | Disable button                                              |
| onClick   | function    | Click event handler                                         |
| children  | ReactNode   | Button content                                              |
| icon      | ElementType | Icon component to display alongside the button text         |
| className | string      | Additional CSS classes for styling                          |
| loading   | boolean     | Specify whether the button should display a loading spinner |
| href      | string      | URL for the button if it should act as a link               |
| as        | ElementType | HTML element type for the button                            |
| to        | string      | Destination path for the link if using the 'as' prop        |
| ...rest   | any         | Additional props for customization                          |

<img width="703" alt="Screenshot 2024-05-04 051425" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/be915362-55ee-4f06-a75c-3bf86565c887">
<img width="709" alt="Screenshot 2024-05-04 051538" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/ebbe903a-0e8c-4220-8cb9-7b5ca086567b">

### FormControl

| Prop       | Type      | Description                        |
| ---------- | --------- | ---------------------------------- |
| label      | string    | Label for the form control         |
| htmlFor    | string    | ID of the form control element     |
| error      | string    | Error message to display           |
| hint       | string    | Hint message to display            |
| disabled   | boolean   | Disable the form control           |
| className  | string    | Additional CSS classes for styling |
| children   | ReactNode | Form control element               |
| onBlur     | function  | Blur event handler                 |
| onFocus    | function  | Focus event handler                |
| forceLabel | boolean   | Force label to always show         |
| ...rest    | any       | Additional props for customization |

<img width="713" alt="Screenshot 2024-05-04 051640" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/b09bd284-de4e-400f-9360-ac62b406cc34">
<img width="711" alt="Screenshot 2024-05-04 051657" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/f2ddf69b-badd-4fa5-aea0-bd728c6552e4">

### Link

| Prop      | Type        | Description                        |
| --------- | ----------- | ---------------------------------- |
| disabled  | boolean     | Disable the link                   |
| className | string      | Additional CSS classes for styling |
| children  | ReactNode   | Link text                          |
| as        | ElementType | HTML element type (default is `a`) |
| href      | string      | Link URL                           |
| ...rest   | any         | Additional props for customization |

<img width="709" alt="Screenshot 2024-05-04 051835" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/31425da4-2bf0-4dfd-bd08-ca0b75609880">

### Search

| Prop        | Type          | Description                                            |
| ----------- | ------------- | ------------------------------------------------------ |
| className   | string        | Additional CSS classes for styling                     |
| size        | ComponentSize | Size of the search input (`default`, `small`, `large`) |
| width       | string        | Width of the search input                              |
| value       | string        | Current value of the search input                      |
| onChange    | function      | Change event handler for the search input              |
| placeholder | string        | Placeholder text for the search input                  |

<img width="726" alt="Screenshot 2024-05-04 052414" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/3091d9b3-faa6-43e6-82a1-328156445fbc">

### Select

| Prop        | Type           | Description                                            |
| ----------- | -------------- | ------------------------------------------------------ |
| className   | string         | Additional CSS classes for styling                     |
| size        | ComponentSize  | Size of the select input (`default`, `small`, `large`) |
| disabled    | boolean        | Disable the select input                               |
| error       | boolean        | Indicate error state                                   |
| width       | string         | Width of the select input                              |
| option      | SelectOption   | Selected option                                        |
| listOptions | SelectOption[] | Array of options for the select input                  |
| onChange    | function       | Change event handler for the select input              |
| placeholder | string         | Placeholder text for the select input                  |

<img width="713" alt="Screenshot 2024-05-04 052459" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/de72ccae-e20a-48cf-8c95-c81c7672a179">
<img width="722" alt="Screenshot 2024-05-04 051719" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/b835337c-6ca1-4c79-a9ca-f697c0de89a5">
<img width="718" alt="Screenshot 2024-05-04 052626" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/5bcfbb59-267d-46ed-89a5-9873e66ff2b1">
<img width="528" alt="Screenshot 2024-05-04 052525" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/00b5275d-c3b6-4e2b-bf1a-27cda16c3244">

### Skeleton

| Prop         | Type   | Description                           |
| ------------ | ------ | ------------------------------------- |
| width        | number | Width of the skeleton element         |
| height       | number | Height of the skeleton element        |
| className    | string | Additional CSS classes for styling    |
| borderRadius | string | Border radius of the skeleton element |

<img width="714" alt="Screenshot 2024-05-04 052700" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/5064b769-8ce0-4a1f-b3be-edee01aee7a6">

### Spinner

| Prop      | Type    | Description                        |
| --------- | ------- | ---------------------------------- |
| size      | number  | Size of the spinner                |
| className | string  | Additional CSS classes for styling |
| light     | boolean | Use light spinner variant          |

<img width="714" alt="Screenshot 2024-05-04 052722" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/ddadcf1e-3938-48b0-b1dd-df2047827130">

### TextInput

| Prop        | Type          | Description                                     |
| ----------- | ------------- | ----------------------------------------------- |
| icon        | ElementType   | Icon component to display                       |
| size        | ComponentSize | Size of the input (`default`, `small`, `large`) |
| disabled    | boolean       | Disable the input                               |
| error       | boolean       | Indicate error state                            |
| value       | string        | Current value of the input                      |
| onChange    | function      | Change event handler for the input              |
| placeholder | string        | Placeholder text for the input                  |
| width       | string        | Width of the input                              |
| readonly    | boolean       | Make the input read-only                        |
| clearable   | boolean       | Allow clearing the input                        |
| ...rest     | any           | Additional props for customization              |

<img width="709" alt="Screenshot 2024-05-04 052741" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/b5ec0064-62a6-4289-9be9-efbe3e246123">
<img width="709" alt="Screenshot 2024-05-04 052835" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/101bc450-70c2-45d1-a820-7728a8b18c4d">
<img width="712" alt="Screenshot 2024-05-04 052811" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/68a934ae-6ae6-4f2f-bc74-0a42630b5a01">

### Typography

| Prop      | Type      | Description                                |
| --------- | --------- | ------------------------------------------ |
| variant   | string    | Typography variant (`h1`, `h2`, `h3`)      |
| align     | string    | Text alignment (`center`, `right`, `left`) |
| className | string    | Additional CSS classes for styling         |
| children  | ReactNode | Text content                               |

<img width="709" alt="Screenshot 2024-05-04 052916" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/be9e6ff4-d72c-4a76-8442-a829efbe269c">

### Avatar

| Prop     | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| imageSrc | string | Source URL for the avatar image |

<img width="710" alt="Screenshot 2024-05-04 051356" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/14f46b64-06af-4660-b73f-39d0fa412fa2">

### Card

| Prop            | Type      | Description                                |
| --------------- | --------- | ------------------------------------------ |
| backgroundColor | string    | Background color of the card               |
| children        | ReactNode | Content to be displayed within the card    |
| padding         | string    | Padding around the content inside the card |

<img width="708" alt="Screenshot 2024-05-04 051605" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/0627a6fa-ab8b-4a44-bc97-106bf3c780dd">

### Modal

| Prop     | Type      | Description                              |
| -------- | --------- | ---------------------------------------- |
| children | ReactNode | Content to be displayed within the modal |

<img width="721" alt="Screenshot 2024-05-04 052356" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/c01646a2-ef8d-47b0-b939-98a2a887184a">

### Header

| Prop            | Type     | Description                             |
| --------------- | -------- | --------------------------------------- |
| user            | User     | User object                             |
| onLogin         | function | Event handler for login action          |
| onLogout        | function | Event handler for logout action         |
| onCreateAccount | function | Event handler for create account action |

<img width="708" alt="Screenshot 2024-05-04 051800" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/558a31c9-9c15-453e-b565-b02c574eef88">
<img width="724" alt="Screenshot 2024-05-04 051817" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/0302e7b3-78d0-4b8a-b906-36526d864432">

### Login

| Prop          | Type     | Description                              |
| ------------- | -------- | ---------------------------------------- |
| onSubmit      | function | Event handler for form submission        |
| initialValues | object   | Initial values for the form fields       |
| loading       | boolean  | Specify whether to display loading state |
| registerLink  | string   | Link for user registration               |
<img width="699" alt="Screenshot 2024-05-04 051925" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/e652d3f8-d2e3-464d-8712-9ead0549ba95">
<img width="708" alt="Screenshot 2024-05-04 051949" src="https://github.com/Vinyl-Davyl/vinyl-component-blocks/assets/68241801/0b82287e-fb57-4c2b-be86-6994d0a5794e">



## External Resources and Dependencies 🌐

The Vinyl Component Blocks library relies on the following external resources and dependencies:

- **Styled Components**: Utilized for customizable styling of components. CSS-in-JS library.

- **React**: Serves as the core of the Vinyl Component Blocks, providing the necessary infrastructure for building user interfaces in JavaScript.

- **TypeScript**: Vinyl Component Blocks is super strictly typed. TypeScript as a strict syntactical superset of JavaScript adds static typing to the library. It enhances developer productivity and code quality.

- **Email Validator**: Used for validating emails, for the input-component most specifically. Email Validator is a dependency that helps ensure that the entered email addresses conform to standard email format rules, enhancing the reliability and accuracy of user input validation.

## Demo Examples 🛠️

### Customizing TextInput Component

```jsx
import React from "react";
import { TextInput } from "vinyl-component-blocks";

const CustomTextInput = () => (
  <TextInput
    className="custom-text-input"
    icon={YourIconComponent}
    size="large"
    disabled={false}
    error={false}
    value="Hello"
    onChange={(e) => console.log(e.target.value)}
    placeholder="Enter text here"
    width="200px"
    readonly={false}
    clearable={true}
  />
);

export default CustomTextInput;
```

### Demo Example, Simple Login UI

```jsx
import React from "react";
import { Header, Login } from "vinyl-component-blocks";

const HeaderWithLogin = () => (
  <div>
    <Header
      user={{ name: "John Doe" }}
      onLogout={() => console.log("Logged out")}
    />
    <Login
      onLogin={() => console.log("Logged in")}
      onCreateAccount={() => console.log("Creating account")}
    />
  </div>
);

export default HeaderWithLogin;
```

### Customizing Components with Custom CSS Styles ✨

Customizing components with custom CSS styles allows you to tailor the appearance of UI components to match the specific design requirements of your project. Applying custom CSS classes to components, you can override default styles and apply unique visual enhancements. This approach offers flexibility and control over the presentation of components.

#### Customizing Card Component

```jsx
import React from "react";
import { Card } from "vinyl-component-blocks";
import "./custom-styles.css";

const CustomCard = () => (
  <Card
    backgroundColor="#f0f0f0"
    padding="20px"
    className="custom-card" // Custom CSS class for styling
  >
    <h2>This is a Custom Card</h2>
    <p>
      Stop reinventing the wheel! Our well-documented component library empowers
      you to concentrate on building unique features and functionalities.
    </p>
  </Card>
);

export default CustomCard;
```

#### Customizing TextInput Component

```jsx
import React from "react";
import { TextInput } from "vinyl-component-blocks";
import "./custom-styles.css";

const CustomTextInput = () => (
  <TextInput
    className="custom-text-input" // Custom CSS class for styling
    icon={YourIconComponent}
    size="large"
    disabled={false}
    error={false}
    value="Hello"
    onChange={(e) => console.log(e.target.value)}
    placeholder="Enter text here"
    width="200px"
    readonly={false}
    clearable={true}
  />
);

export default CustomTextInput;
```

In the `custom-styles.css` file:

```css
/* custom-styles.css */
.custom-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.custom-text-input {
  border: 2px solid #cccccc;
  border-radius: 8px;
}
```

## Contributing

### Adding New Components

Contributions from developers who feel the need to expand the library with new components or features. Whether you've identified a potential component, have an idea for a new feature, or want to enhance existing functionality, your contributions are valuable to the community.

If you find something that piques your interest or if the project has inspired you, feel free to contribute by submitting pull requests(PRs). Your contributions help improve the library for everyone. Don't forget to leave a star ⭐ on GitHub to show your support!

## Conclusion

Vinyl Component Blocks offers a comprehensive collection of UI components that are easy to use and highly customizable. Say goodbye to design inconsistencies.

So, stop reinventing the wheel! Our well-documented component library empowers you to create, clone and build unique component features and functionalities to your taste.

Stop repeating work! Install, call, use, modify.
`npm install vinyl-component-blocks`.
