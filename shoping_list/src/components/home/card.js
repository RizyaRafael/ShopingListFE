"use client"
import instance from "@/config/axiosInstance"
import Swal from "sweetalert2"
import ButtonComp from "../button";



export default function Card({ product, userId, token }) {
    let userProduct = false
    if (userId === product.UserId) {
        userProduct = true
    }
    async function buy() {
        try {
            console.log("buy is working")

            const response = await instance({
                url: "/products/buyProduct",
                method: "post",
                data: product,
                headers: {
                    Authorization: token
                }
            })

            const result = await Swal.fire({
                title: "Purchase Successful",
                text: `You bought ${product.Name}`,
                icon: "success",
                confirmButtonText: "Go to home",
                customClass: {
                    popup: 'swal2-popup',
                    overlay: 'swal2-overlay'
                }
            })
            console.log(result);

            if (result.isConfirmed) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error",
                text: "Something went wrong with your purchase.",
                icon: "error",
                confirmButtonText: "Try again"
            });
        }
    }
    console.log(product.UserId);
    console.log(userId);
    console.log(token);
    



    return (
        <>

            <div className="rounded-xl bg-gray-700 px-3 py-1 flex flex-col justify-around">
                <img src={product.ImageUrl} alt="" className="mt-2" />
                <div className="">

                    <div className="text-xl truncate hover:text-clip">{product.Name}</div>
                    <div>Rp. {product.Price}</div>
                    <div>Stock: {product.Quantity}</div>
                </div>
                <div>
                    {token ? (
                        userProduct ? (
                            <>
                                <ButtonComp text="Update" purpose={buy} color="bg-green-500" />
                                <ButtonComp text="Delete" purpose={buy} color="bg-red-500" />
                            </>
                        ) : (
                            <ButtonComp className text="Buy" purpose={buy} color="bg-gray-400" />
                        )
                    ) : (
                        <p>Login to buy</p>
                    )}
                </div>
            </div>
        </>
    )
}