import React from 'react';

const React = () => {
    return (
        <>
            <div class="title">
                <h1>Obi-Wan Kenobi</h1>
            </div>
            <div class="container">
                <div class="person">
                    <div class="title">
                        <h3>Obi-Wan Kenobi</h3>
                    </div>
                    <div class="media">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-show-1567178968.jpg?crop=0.486xw:0.973xh;0.512xw,0.00340xh&resize=480:*" alt="" />
                    </div>
                    <div class="details">
                        <div class="details-label">Height:
                            <span class="details-value">
                                182
                            </span>
                        </div>
                        <div class="details-label">Weight:
                            <span class="details-value">
                                77
                            </span>
                        </div>
                        <div class="details-label">Species:
                            <span class="details-value">
                                Human
                            </span>
                        </div>
                        <div class="details-label">Home World:
                            <span class="details-value">
                                Stewjon
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ships">
                    <div class="title">
                        <h1>Piloted Starships</h1>
                    </div>
                    <hr />
                    <div class="episode-people">
                        <div class="cards">
                            <a class="card" href="javascript:;">
                                <span class="card-header"
                                    style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvNE9TQzL-IG9aGe4CjZr_u6Tw2ErLvGlMSePWurIiGj8ZijbEA);">
                                </span>
                                <span class="card-title">
                                    <h5>Jedi Starfighter</h5>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React;