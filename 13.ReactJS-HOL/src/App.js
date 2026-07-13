import React from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div style={{ textAlign: "center" }}>

            <h1>Blogger App</h1>

            {/* Using if condition */}

            {showBooks ? <BookDetails /> : <h3>No Books Available</h3>}

            {/* Using && */}

            {showBlogs && <BlogDetails />}

            {/* Using element variable */}

            {

                (() => {

                    let component;

                    if (showCourses)
                        component = <CourseDetails />;
                    else
                        component = <h3>No Courses</h3>;

                    return component;

                })()

            }

        </div>

    );

}

export default App;