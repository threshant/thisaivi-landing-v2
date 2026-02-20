"use client";

import { useEffect, useState } from "react";

interface Tile {
  id: number;
  position: number;
  color: 0 | 1; // 0 = white, 1 = accent
}

interface Shape {
  name: string;
  pattern: (0 | 1)[];
}

const ImageShuffleGame = ({ imageSrc }: { imageSrc: string }) => {
  const SHAPES: Shape[] = [
    {
      name: "Arrow Up",
      pattern: [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    },
    {
      name: "Arrow Down",
      pattern: [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
    },
    {
      name: "Tick Mark",
      pattern: [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    },
    {
      name: "Circle",
      pattern: [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
    },
    {
      name: "Cross",
      pattern: [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    },
    {
      name: "Plus Sign",
      pattern: [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    },
    {
      name: "Horizontal Line",
      pattern: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    },
    {
      name: "Vertical Line",
      pattern: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
    },
  ];

  const [tiles, setTiles] = useState<Tile[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [moves, setMoves] = useState(0);
  const [draggedPosition, setDraggedPosition] = useState<number | null>(null);
  const [dragOverPosition, setDragOverPosition] = useState<number | null>(null);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [targetShape, setTargetShape] = useState<Shape | null>(null);
  const [correctArray, setCorrectArray] = useState<(0 | 1)[]>([]);

  useEffect(() => {
    shufflePuzzle();
  }, []);

  useEffect(() => {
    if (tiles.length === 0 || !targetShape) return;

    // Check if current tiles match the target shape
    const currentArray = tiles.map((tile) => tile.color);
    const isCorrect =
      currentArray.length === correctArray.length &&
      currentArray.every((color, index) => color === correctArray[index]);

    setIsWon(isCorrect && moves > 0);
  }, [tiles, moves, correctArray]);

  // Auto-shuffle tiles every 3 seconds
  useEffect(() => {
    if (isWon) return;

    const interval = setInterval(() => {
      setTiles((prevTiles) => {
        const newTiles = [...prevTiles];
        const randomPos1 = Math.floor(Math.random() * 16);
        let randomPos2 = Math.floor(Math.random() * 16);
        while (randomPos2 === randomPos1) {
          randomPos2 = Math.floor(Math.random() * 16);
        }

        const tile1Index = newTiles.findIndex(
          (t) => t?.position === randomPos1,
        );
        const tile2Index = newTiles.findIndex(
          (t) => t?.position === randomPos2,
        );

        if (tile1Index !== -1 && tile2Index !== -1) {
          [newTiles[tile1Index].position, newTiles[tile2Index].position] = [
            newTiles[tile2Index].position,
            newTiles[tile1Index].position,
          ];
        }

        return newTiles;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isWon]);

  const shufflePuzzle = () => {
    // Select random shape
    const randomShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    setTargetShape(randomShape);
    setCorrectArray(randomShape.pattern);

    // Create initial tiles with shuffled positions but correct colors
    const initialTiles = randomShape.pattern.map((color, index) => ({
      id: index,
      position: index,
      color: color as 0 | 1,
    }));

    // Shuffle tiles
    let shuffled = [...initialTiles];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      shuffled[i].position = i;
      shuffled[j].position = j;
    }

    setTiles(shuffled);
    setMoves(0);
    setIsWon(false);
  };

  const getAdjacentPositions = (position: number): number[] => {
    const adjacent: number[] = [];
    const row = Math.floor(position / 4);
    const col = position % 4;

    if (row > 0) adjacent.push(position - 4);
    if (row < 3) adjacent.push(position + 4);
    if (col > 0) adjacent.push(position - 1);
    if (col < 3) adjacent.push(position + 1);

    return adjacent;
  };

  const handleTileClick = (position: number) => {
    if (isWon) return;

    const tile = tiles.find((t) => t?.position === position);
    if (!tile) return;

    // Find empty position (for click to move, find any other tile)
    // We'll allow swapping with any adjacent tile
    const adjacent = getAdjacentPositions(position);

    const canSwap = adjacent.some((adjPos) => {
      const adjTile = tiles.find((t) => t?.position === adjPos);
      return adjTile !== undefined;
    });

    if (canSwap) {
      // Swap with first adjacent tile
      const swapPos = adjacent.find((adjPos) =>
        tiles.find((t) => t?.position === adjPos),
      );
      if (swapPos !== undefined) {
        swapTiles(position, swapPos);
      }
    }
  };

  const swapTiles = (pos1: number, pos2: number) => {
    const newTiles = [...tiles];
    const tile1Index = newTiles.findIndex((t) => t?.position === pos1);
    const tile2Index = newTiles.findIndex((t) => t?.position === pos2);

    if (tile1Index !== -1 && tile2Index !== -1) {
      [newTiles[tile1Index].position, newTiles[tile2Index].position] = [
        newTiles[tile2Index].position,
        newTiles[tile1Index].position,
      ];
      setTiles(newTiles);
      setMoves((m) => m + 1);
    }
  };

  const handleDragStart = (position: number) => {
    if (isWon) return;
    setDraggedPosition(position);
  };

  const getNearestPosition = (
    clientX: number,
    clientY: number,
  ): number | null => {
    if (!containerRef) return null;

    const rect = containerRef.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    let nearestPosition = -1;
    let nearestDistance = Infinity;

    for (let i = 0; i < 16; i++) {
      const row = Math.floor(i / 4);
      const col = i % 4;
      const cellWidth = rect.width / 4;
      const cellHeight = rect.height / 4;
      const cellCenterX = col * cellWidth + cellWidth / 2;
      const cellCenterY = row * cellHeight + cellHeight / 2;

      const distance = Math.sqrt(
        Math.pow(relX - cellCenterX, 2) + Math.pow(relY - cellCenterY, 2),
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestPosition = i;
      }
    }

    return nearestPosition;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggedPosition === null || !containerRef) return;

    const nearest = getNearestPosition(e.clientX, e.clientY);
    if (nearest !== null && nearest !== draggedPosition) {
      setDragOverPosition(nearest);
    }
  };

  const handleDragEnd = () => {
    if (draggedPosition === null || dragOverPosition === null) {
      setDraggedPosition(null);
      setDragOverPosition(null);
      return;
    }

    if (draggedPosition === dragOverPosition) {
      setDraggedPosition(null);
      setDragOverPosition(null);
      return;
    }

    swapTiles(draggedPosition, dragOverPosition);
    setDraggedPosition(null);
    setDragOverPosition(null);
  };

  if (tiles.length === 0 || !targetShape) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-full max-w-sm aspect-square rounded-2xl border-2 border-[var(--line)] bg-[var(--card)]/50 flex items-center justify-center">
          <p className="text-sm text-[var(--muted)]">Loading puzzle...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full max-w-sm">
        <div
          ref={setContainerRef}
          className="relative w-full overflow-hidden rounded-2xl  bg-[var(--card)]/50"
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => {
            if (draggedPosition !== null) {
              handleDragEnd();
            }
          }}
        >
          <div className="grid h-full w-full grid-cols-4 gap-1 p-1">
            {Array.from({ length: 16 }).map((_, position) => {
              const tile = tiles.find((t) => t?.position === position);

              if (!tile) return null;

              const isCorrect = tile.color === correctArray[position];

              return (
                <button
                  key={tile.id}
                  onMouseDown={() => handleDragStart(position)}
                  onClick={() => handleTileClick(position)}
                  className={`cursor-grab active:cursor-grabbing rounded transition-all duration-200 h-20 w-20 ${
                    isCorrect ? "" : ""
                  } ${draggedPosition === position ? "opacity-50 scale-90" : ""} ${
                    dragOverPosition === position && draggedPosition !== null
                      ? "ring-2 ring-orange-400"
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      tile.color === 1 ? "var(--accent)" : "var(--canvas)",
                  }}
                  title={`Tile ${tile.id + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <p className="max-w-sm text-center text-xs text-[var(--muted)]">
        Pivot fast, learn faster—until product–market fit clicks.{" "}
      </p>
    </div>
  );
};

export default ImageShuffleGame;
