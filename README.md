## Trial-task-ryuta
# M1: Database schema
  Users Table
  This table will store user information, including their email and password.
  CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
  address VARCHAR(255) NOT NULL
  );
  Additional Considerations
  - Indexing: Consider adding indexes on frequently queried columns (e.g., email in the
  users table) to improve performance.
  - Widget Configuration: Consider adding a widget_config JSON column in the
  layout_widgets table or another table to store such configurations.
  - Constraints and Validation: Add necessary constraints (e.g., NOT NULL, UNIQUE)
  and validations to ensure data integrity and consistency.
  - Additional Tables: Consider adding any additional table you feel might help with the
  task requirements