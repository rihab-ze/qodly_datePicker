# Overview

The Date Picker provides users with an intuitive interface to select a precise date from a calendar, enhancing user experience by simplifying date selection tasks. The Month Picker streamlines the process of choosing a specific month and year, presenting users with a focused interface for navigating through months. Similarly, the Year Picker offers a straightforward method for selecting a particular year, ideal for scenarios requiring users to input or filter data based on yearly intervals. Together, these components enhance usability and efficiency in various applications requiring date-related interactions.

## Date and Month Picker component

![datePicker](/datePicker.png)

![monthPicker](/monthPicker.png)

### Properties

| Name                           | Type    | Default              | Description                                                                                                                                                                                            |
| ------------------------------ | ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Selection modes                | string  | single               | Defines the selection modes and can be one of the following values: single, multiple and range. The default value is "single", indicating that the chosen element will represent a single date(month). |
| Read only                      | Boolean | False                | If true, the selection is restricted and cannot be modified.                                                                                                                                           |
| color picker                   | string  | #228be6              | Sets the color of the selected date(s)(month(s)).                                                                                                                                                      |
| color range                    | string  | rgba(34,139,230,.12) | Sets the color for a range of dates(months). It is functional for the range mode.                                                                                                                      |
| selected element border raduis | string  | 0px                  | Sets the border raduis of the selected date(s)(month(s)).                                                                                                                                              |
| Language                       | string  | English              | Specifies the language used for displaying the date and month picker's interface elements.                                                                                                             |

### Datasource

| Selection mode | Type           | Required | Description                        |
| -------------- | -------------- | -------- | ---------------------------------- |
| single         | Date           | Yes      | Will contain one date              |
| multiple       | Array of Dates | Yes      | Will contain an array of dates     |
| range          | Array of Dates | Yes      | will contain an array of two dates |

### Custom css

When customizing the appearance of the date picker, you have access to the following classes within the component:

![datecss](/3.png)

And for the year picker, you have access to the following classes within the component:

![monthcss](/1.png)

## YearPicker component

![yearPicker](/yearPicker.png)

### Properties

| Name                           | Type    | Default              | Description                                                                                                                                                                                     |
| ------------------------------ | ------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Selection modes                | string  | single               | Defines the selection modes and can be one of the following values: single, multiple and range. The default value is "single", indicating that the chosen element will represent a single year. |
| Read only                      | Boolean | False                | If true, the selection is restricted and cannot be modified.                                                                                                                                    |
| color picker                   | string  | #228be6              | Sets the color of the selected year(s).                                                                                                                                                         |
| color range                    | string  | rgba(34,139,230,.12) | Sets the color for a range of years. It is functional for the range mode.                                                                                                                       |
| selected element border raduis | string  | 0px                  | Sets the border raduis of the selected year.                                                                                                                                                    |
| Language                       | string  | English              | Specifies the language used for displaying the year picker's interface elements.                                                                                                                |

### Datasource

| Selection mode | Type             | Required | Description                          |
| -------------- | ---------------- | -------- | ------------------------------------ |
| single         | number           | Yes      | Will contain a number                |
| multiple       | Array of numbers | Yes      | Will contain an array of numbers     |
| range          | Array of numbers | Yes      | will contain an array of two numbers |

### Custom CSS

When customizing the appearance of the year picker, you have access to the following classes within the component:

![yearcss](/2.png)
