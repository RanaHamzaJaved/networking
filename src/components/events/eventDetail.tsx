import Image from 'next/image'
import React from 'react'

const EventDetail = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="mx-auto max-w-7xl px-4 py-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* MAIN CONTENT */}
                    <main className="lg:col-span-8 space-y-6">

                        {/* HERO */}
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="https://picsum.photos/seed/0FuxA8J/1200/400?grayscale&blur=1"
                                alt="Event"
                                width={1200}
                                height={380}
                                className="w-full h-[220px] sm:h-[300px] lg:h-[380px] object-cover"
                            />
                        </div>

                        {/* TITLE */}
                        <div>
                            <h1 className="heading-primary text-xl lg:text-2xl">
                                5 top startup and investor.
                            </h1>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Web Summit Provides A Whole Range Of Opportunities For Startups And Investors To Network.
                            </p>
                        </div>

                        {/* META */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground">Date</p>
                                <p className="font-medium heading-primary mt-1 ">01/12/2025</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">From</p>
                                <p className="font-medium heading-primary mt-1">06:00 PM</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">To</p>
                                <p className="font-medium heading-primary mt-1">07:00 PM</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Price</p>
                                <p className="font-medium text-green-600">$50–100</p>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div className="space-y-2">
                            <h3 className="font-semibold">Venue & Location</h3>
                            <p className="text-sm">
                                Gelora Bung Karno Stadium, Jakarta
                            </p>

                            <div className="overflow-hidden rounded-xl h-[220px] sm:h-[260px] lg:h-[300px] border">
                                <iframe
                                    title="Event Location"
                                    src="https://www.google.com/maps?q=Gelora+Bung+Karno+Stadium+Jakarta&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* AGENDA */}
                        <div className="space-y-2">
                            <h3 className="font-semibold">Meeting Room Booking Available</h3>
                            <p className="text-sm text-muted-foreground">
                                You can easily book a separate meeting room for focused discussions, calls, or team collaborations.
                            </p>
                        </div>

                    </main>

                    {/* ACTION SIDEBAR */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 space-y-4">

                            <div className="rounded-2xl bg-white border p-5 space-y-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Price</p>
                                    <p className="text-xl font-semibold text-green-600">
                                        $50–100
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">Total Seats</p>
                                    <p className="font-medium heading-primary  mt-1">150</p>
                                </div>

                                <button className="btn-gradient-primary flex w-full px-[68px] py-2">
                                    Reserve Seat Now
                                </button>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>

    )
}

export default EventDetail