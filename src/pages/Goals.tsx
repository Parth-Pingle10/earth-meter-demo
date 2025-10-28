import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { mockGoals } from "@/lib/mockData";
import { Target, Plus, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const Goals = () => {
  const [goals, setGoals] = useState(mockGoals);
  const [newGoalName, setNewGoalName] = useState("");
  const [newGoalTarget, setNewGoalTarget] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateGoal = () => {
    if (!newGoalName || !newGoalTarget) {
      toast.error("Please fill all fields");
      return;
    }

    const newGoal = {
      id: goals.length + 1,
      target: newGoalName,
      targetValue: parseFloat(newGoalTarget),
      progress: 0,
      status: "Active" as const
    };

    setGoals([...goals, newGoal]);
    setNewGoalName("");
    setNewGoalTarget("");
    setOpen(false);
    toast.success("Goal created successfully! 🎯");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8 animate-fade-in max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Goals</h1>
            <p className="text-muted-foreground">Track your eco-friendly targets</p>
          </div>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="eco-gradient">
                <Plus className="h-5 w-5 mr-2" />
                New Goal
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Goal</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="goal-name">Goal Description</Label>
                  <Input
                    id="goal-name"
                    placeholder="e.g., Reduce 20 kg CO₂ this month"
                    value={newGoalName}
                    onChange={(e) => setNewGoalName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal-target">Target Value</Label>
                  <Input
                    id="goal-target"
                    type="number"
                    placeholder="e.g., 20"
                    value={newGoalTarget}
                    onChange={(e) => setNewGoalTarget(e.target.value)}
                  />
                </div>
                <Button onClick={handleCreateGoal} className="w-full eco-gradient">
                  Create Goal
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {goals.map((goal) => {
            const progressPercent = (goal.progress / goal.targetValue) * 100;
            
            return (
              <Card key={goal.id} className="shadow-eco hover:shadow-eco-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      {goal.target}
                    </div>
                    <span className="text-sm font-normal text-muted-foreground">
                      {goal.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {goal.progress} / {goal.targetValue}
                      </span>
                    </div>
                    <Progress value={progressPercent} className="h-3" />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      {progressPercent.toFixed(0)}% complete
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Goals;
