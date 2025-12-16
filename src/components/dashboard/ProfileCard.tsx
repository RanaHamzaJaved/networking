import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ProfileCard() {
    return (
        <Card className="w-full max-w-sm">
            <CardContent className="p-5 flex flex-col items-center gap-4">

                {/* AVATAR */}
                <Avatar className="w-20 h-20">
                    <AvatarImage src="/user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>

                {/* USER INFO */}
                <div className="text-center">
                    <h2 className="font-semibold text-lg leading-tight">John Doe</h2>
                    <p className="text-sm text-muted-foreground">@johndoe</p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Los Angeles, CA
                    </p>
                    <p className="text-sm font-medium mt-1">
                        Event Organizer
                    </p>
                </div>

                {/* STATS */}
                <div className="w-full">
                    <Separator className="my-3" />

                    <div className="grid grid-cols-3 text-center">
                        <div>
                            <p className="text-sm font-semibold">248</p>
                            <p className="text-xs text-muted-foreground">Friends</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">6</p>
                            <p className="text-xs text-muted-foreground">Requests</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">12</p>
                            <p className="text-xs text-muted-foreground">Events</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}

                <button className="btn-gradient-primary flex w-full px-[68px] py-2 mt-2">
                    Edit Profile
                </button>
            </CardContent>
        </Card>
    );
}
