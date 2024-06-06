import React from 'react'
import Layout from '../Layout/Layout'

const Login = () => {
    return (
        <Layout>
            <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-dry via-red-600 to-dry">
                <div class="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="lg:w-1/2 flex flex-col justify-center p-8 bg-slate-900 text-white">
                        <h2 class="text-3xl font-bold mb-4">Create your Account</h2>
                        <p class="text-lg">Share your artwork and get projects!</p>
                    </div>
                    <div class="lg:w-1/2 p-8">
                        <h3 class="text-2xl font-semibold mb-6 text-center">Sign Up</h3>
                        <form action="#" class="space-y-4">
                            <div>
                                <label for="first-name" class="sr-only">First name</label>
                                <input id="first-name" type="text" placeholder="First name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>
                            <div>
                                <label for="last-name" class="sr-only">Last name</label>
                                <input id="last-name" type="text" placeholder="Last name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>
                            <div>
                                <label for="email" class="sr-only">Email address</label>
                                <input id="email" type="email" placeholder="Email address" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>
                            <div>
                                <label for="password" class="sr-only">Password</label>
                                <input id="password" type="password" placeholder="Password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>
                            <div class="flex items-center">
                                <input id="terms" type="checkbox" class="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded" />
                                <label for="terms" class="ml-2 block text-sm text-gray-900">Accept Terms & Conditions</label>
                            </div>
                            <button type="submit" class="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg">Join us</button>
                            <div class="text-center text-gray-500">or</div>
                            <button type="button" class="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50">
                                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="h-5 w-5 mr-2" />
                                Sign up with Google
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login