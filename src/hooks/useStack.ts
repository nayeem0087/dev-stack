import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import technologiesData from '../data/technologies.json';
import type { Technology } from '../types';

export const useStack = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load Data
  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setTechnologies(technologiesData as Technology[]);
        setLoading(false);
      }, 500);
    };
    loadData();
  }, []);

  // Add to Stack
  const addToStack = (tech: Technology) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  // Remove from Stack
  const removeFromStack = (id: string) => {
    const removedItem = stack.find(item => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removedItem) {
      toast.info(`${removedItem.name} removed.`);
    }
  };

  // Remove All
  const removeAll = () => {
    setStack([]);
    toast.error("All technologies removed from stack.");
  };

  return {
    technologies,
    stack,
    loading,
    addToStack,
    removeFromStack,
    removeAll
  };
};