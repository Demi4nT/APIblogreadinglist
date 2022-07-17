import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Gryffindor = () => {
    const {store,actions} = useContext(Context)
    useEffect(() => {
        actions.getGryffindor();
    }, [])
    console.log(store.gryffindor);
    return (
        <div>
            {store.gryffindor.map((gryffindor,index) => {
                return(
                    <div>
                        <p>asdasdsad</p>
                    </div>
                )
            })
            }
            
        </div>
    )

        }
