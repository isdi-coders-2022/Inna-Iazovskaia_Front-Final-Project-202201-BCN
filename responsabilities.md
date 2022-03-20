# Components

- App

  - Render Navigation
  - Route every page

- Navigation

  - Display the navigation menu items

- PrimaryButton

  - Display received text
  - Execute a received function when clicked

- Loader

  - Display text "Loading" and render ClipLoader

- MessageCard

  - Display received text
  - Execute action on click (goToDetailsPage)
  - Render delete icin and pass a received action as its onClick
  - Rnder update icon

- MessageForm

  - Display input and submit button
  - Execute function on input changes

- MessageDetailPage

  - Display information of the received message: date of creation of the message, sender, ricipient, text
  - Render PrimaryButton and pass it action on click
  - Render Loader

- MessagesPage

  - Render list of messages
  - Render MessageForm
  - Render Loader

- NotFoundPage

  - Display heading "Page not found"
  - Display text "Sorry, this page does not exist"
  - Render FontAwesome icon HeartCrack

- UpdateMessagePage
  - Display heading "Edit the message"
  - Display textarea with received message text and submit batton

# Data

- Messages list

  - Create/Add message to the list
  - Modify an message in the list
  - Delete an message from the list
  - Update message in the list

- Message
  - Update the message to a new one
  - Create new message
