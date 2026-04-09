'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Empty } from '@/components/ui/empty';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string, completed: boolean) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <Empty
        icon="inbox"
        title="No tasks yet"
        description="Add a task above to get started"
      />
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="flex items-start gap-4 p-5 bg-gradient-to-r from-card/60 to-card/40 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:glow-border group animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id, task.completed)}
            className="mt-1 border-primary/50 hover:border-primary cursor-pointer transition-colors"
          />
          <div className="flex-1 min-w-0">
            <p
              className={`break-words font-medium transition-all duration-300 ${
                task.completed
                  ? 'line-through text-muted-foreground/60'
                  : 'text-foreground group-hover:text-primary'
              }`}
            >
              {task.title}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2 group-hover:text-muted-foreground transition-colors">
              {formatDate(task.createdAt)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(task.id)}
            className="text-muted-foreground/60 hover:text-destructive hover:bg-destructive/15 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete task</span>
          </Button>
        </div>
      ))}
    </div>
  );
}
