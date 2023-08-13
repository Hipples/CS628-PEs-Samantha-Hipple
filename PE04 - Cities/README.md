## Requirements for PE04 – Cities

### Overview:
Develop a web application for the **CS628 Full-Stack Development Web App** course at the **School of Technology & Computing (STC)**, **City University of Seattle (CityU)**.

### Preliminary Actions:
1. **GitHub Repository**: Ensure you have a private GitHub repository named “cs628-pe-your_first_name” for your programming exercises.
2. **Access**: Provide access to your instructor and the Teaching Assistant.
3. **Billing**: Be aware that using GitHub Codespaces might incur charges. Refer to the pricing details at the provided link.
4. **Consultation**: If in doubt, first refer to the resources in your course. If still unsure, consult the TA after making a genuine effort.

### Learning Outcomes:
- Develop a React application demonstrating proficiency in React Router-based navigation.

### Problem Statement:
Build a React application titled **"Cities"** with the following functionalities:

1. **Cities List**: 
   - Have a route showcasing a list of cities.
   - Each city should be a clickable link directing to its detailed page.

2. **Add City**:
   - Create a route that lets users add a new city.
   - Capture city's name, country, population, and other relevant details.

3. **City Details**:
   - Develop a nested route under the "Cities List" for detailed city information.
   - By clicking a city name, display its detailed data.
   - Utilize `useParams` hook for fetching data based on the city's unique ID.
   - The details should appear on the "Cities List" page, replacing a specific section.

4. **Redirection**:
   - After successfully adding a city, redirect the user to the cities list.

### Technical Requirements:
- Implement navigation using **React Router**.
- Deploy the `useParams` hook for capturing city ID on the details page.
- Showcase at least one instance of successful redirection.
- Ensure the app is visually appealing with user-friendly styling.
- Arrange components and files systematically for clarity.

### Sample Output:
- **AddCity Screen**: (Visual representation)
- **Cities Screen** post adding a city: (Visual representation)
- **City Details** display upon city selection: (Visual representation)

### Submission Guidelines:

1. **Repository Setup**:
   - Create a dedicated directory for this exercise, “PE04-Cities”, within your repository.

2. **Collaborator Access**:
   - Navigate to the Settings menu of your repo.
   - Invite your instructor and TA as collaborators.

3. **Exercise Completion**:
   - Finalize your exercise within the “PE04-Cities” directory.

4. **Analysis Report**:
   - Draft a 150-word report elucidating how your program operates based on the input-process-output model.
   - Structure your README.md with three primary headings – Input, Process, and Output.

5. **Screenshots**:
   - Upload screenshots displaying your outputs to your GitHub repository.

6. **Submission**:
   - Submit your GitHub repository's link via your course shell for the assignment submission.