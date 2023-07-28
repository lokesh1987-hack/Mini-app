import React from "react";
import { ShoesData } from "../utils/Data";

function Home() {
  return (
    <div>
      <div class="jumbotron bg-light">
        <h1 class="mx-auto text-center">Home Page</h1>
        <p class="mx-auto mt-3 ps-2 pe-2 text-center ">
          These shoes hold up just as well outdoors as they do in the office --
          or when you're just hanging out.
        </p>
        <p class="mx-auto text-center ps-2 pe-2">
          We've designed them to give your feet more room to stretch, so you
          feel comfortable and unrestricted all day.
        </p>
        <p class="lead pb-5 pt-2 text-center">
          <a class="btn btn-primary btn-lg me-2" href="#" role="button">
            Product page
          </a>
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Service page
          </a>
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-3 p-3">
        {ShoesData.map((shoe) => (
          <div class="col">
            <div class="card h-100">
              <img src={shoe.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{shoe.name}</h5>

                <p class="card-text">{shoe.description}</p>
                <a href="#" class="btn btn-primary me-2">
                  View
                </a>
                <a href="#" class="btn btn-primary">
                  Edit
                </a>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
