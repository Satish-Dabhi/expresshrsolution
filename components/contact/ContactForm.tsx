"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate async action
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setFormData({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    return (
        <Card className="bg-card border border-border rounded-2xl shadow-md hover:shadow-xl transition-all">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="mt-1 border-[#f0f0f0] text-white"
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="mt-1 border-[#f0f0f0] text-white"
                        />
                    </div>

                    <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="mt-1 border-[#f0f0f0] text-white"
                        />
                    </div>

                    <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            required
                            rows={5}
                            className="mt-1 border-[#f0f0f0] text-white"
                            placeholder="Tell us about your HR needs and how we can help..."
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-pumpkin-orange text-white py-3 text-lg flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : <>
                            Send Message <Send className="h-5 w-5" />
                        </>}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
