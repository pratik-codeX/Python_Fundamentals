import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [showForm, setShowForm] = useState(false);


  // =========================
  // GET
  // =========================

  const fetchStudents = () => {

    fetch(
      "http://127.0.0.1:8000/students/"
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {
        setStudents(data);
      })

      .catch((error) =>
        console.error(error)
      );
  };


  useEffect(() => {

    fetchStudents();

  }, []);


  // =========================
  // POST
  // =========================

  const addStudent = (event) => {

    event.preventDefault();

    fetch(
      "http://127.0.0.1:8000/students/",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name: name,
          email: email,
          age: Number(age),
        }),
      }
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        console.log(data);

        if (data.error) {

          alert(data.error);

          return;
        }

        setName("");
        setEmail("");
        setAge("");

        setShowForm(false);

        fetchStudents();

      })

      .catch((error) =>
        console.error(error)
      );
  };


  // =========================
  // PUT
  // =========================

  const updateStudent = (student) => {

    const newName = prompt(
      "Enter new name:",
      student.name
    );

    const newEmail = prompt(
      "Enter new email:",
      student.email || ""
    );

    const newAge = prompt(
      "Enter new age:",
      student.age
    );


    if (
      !newName ||
      !newEmail ||
      !newAge
    ) {
      return;
    }


    fetch(
      `http://127.0.0.1:8000/students/${student.id}/`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name: newName,
          email: newEmail,
          age: Number(newAge),
        }),
      }
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        console.log(data);

        if (data.error) {

          alert(data.error);

          return;
        }

        fetchStudents();

      })

      .catch((error) =>
        console.error(error)
      );
  };


  // =========================
  // DELETE
  // =========================

  const deleteStudent = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this student?"
      );


    if (!confirmDelete) {
      return;
    }


    fetch(
      `http://127.0.0.1:8000/students/${id}/`,
      {
        method: "DELETE",
      }
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        console.log(data);

        fetchStudents();

      })

      .catch((error) =>
        console.error(error)
      );
  };


  return (

    <div className="app">


      {/* Sidebar */}

      <aside className="sidebar">

        <h2>
          EduTrack
        </h2>


        <nav>

          <div className="nav-item active">
            Dashboard
          </div>

          <div className="nav-item">
            Students
          </div>

          <div className="nav-item">
            Courses
          </div>

          <div className="nav-item">
            Assignments
          </div>

          <div className="nav-item">
            Submissions
          </div>

        </nav>

      </aside>


      {/* Main */}

      <main className="main">


        {/* Header */}

        <header className="header">

          <div>

            <h1>
              Student Management
            </h1>

            <p>
              Manage students in EduTrack
            </p>

          </div>


          <button
            className="add-btn"

            onClick={() =>
              setShowForm(!showForm)
            }
          >

            + Add Student

          </button>

        </header>


        {/* Form */}

        {showForm && (

          <form
            className="student-form"
            onSubmit={addStudent}
          >

            <h2>
              Add Student
            </h2>


            <input
              type="text"
              placeholder="Student name"

              value={name}

              onChange={(event) =>
                setName(event.target.value)
              }

              required
            />


            <input
              type="email"
              placeholder="Email"

              value={email}

              onChange={(event) =>
                setEmail(event.target.value)
              }

              required
            />


            <input
              type="number"
              placeholder="Age"

              value={age}

              onChange={(event) =>
                setAge(event.target.value)
              }

              required
            />


            <button type="submit">

              Save Student

            </button>

          </form>

        )}


        {/* Student Table */}

        <section className="card">


          <div className="card-header">

            <h2>
              Students
            </h2>

            <span>
              {students.length} Students
            </span>

          </div>


          <table>

            <thead>

              <tr>

                <th>
                  ID
                </th>

                <th>
                  Name
                </th>

                <th>
                  Email
                </th>

                <th>
                  Age
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {students.map(
                (student) => (

                  <tr
                    key={student.id}
                  >

                    <td>
                      {student.id}
                    </td>


                    <td
                      className="student-name"
                    >
                      {student.name}
                    </td>


                    <td>
                      {student.email ||
                        "Not provided"}
                    </td>


                    <td>
                      {student.age}
                    </td>


                    <td>

                      <button
                        onClick={() =>
                          updateStudent(
                            student
                          )
                        }
                      >
                        Edit
                      </button>


                      <button
                        onClick={() =>
                          deleteStudent(
                            student.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </section>

      </main>

    </div>
  );
}

export default App;