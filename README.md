# Overview

The Date Picker provides users with an intuitive interface to select a precise date from a calendar, enhancing user experience by simplifying date selection tasks. The Month Picker  streamlines the process of choosing a specific month and year, presenting users with a focused interface for navigating through months. Similarly, the Year Picker  offers a straightforward method for selecting a particular year, ideal for scenarios requiring users to input or filter data based on yearly intervals. Together, these components enhance usability and efficiency in various applications requiring date-related interactions.

## Getting Started

| Name       | Type          | Default   | Description                                       |
| ---------- | ----------------|------------------------ | ------------------------------------------------- |
| Selection modes       | string      |single     | Defines the selection modes and can be one of the following values: single, multiple and range. The default value is single, which means that the selected elemetent can be single date (month,year).   |
| Read only| Boolean   |False    | If true, the selection of date (month,year) is  restricted  and cannot be modified. |
| selected element color  | string     | #228be6    | Sets the color of the selected date(s) (month(s),year(s)). |
| range color     | string      |  rgba(34,139,230,.12)  |  Sets the color for a range of dates (months,years). Its is functional for the range mode.  |
| selected element border raduis| string  | 0      |Sets the  border raduis of the selected date(s) (month(s),year(s)). |
| Language      | string    | English     | Specifies the language used for displaying the date picker's interface elements. |

### Datasource

| Selection mode       | Type          | Required   | Description                                       |
| ---------- | ---------------- |--------------------- |------------------------------------------------- |
| single       | Date      |Yes     | Will contain one date|
| multiple| Array of Dates   |Yes    | Will contaim an array of dates |
| rn=ange  | Array of Dates     | Yes    | will contain an array of two dates |
