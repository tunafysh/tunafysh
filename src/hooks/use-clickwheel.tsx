import { useRef } from "react";
import type { PointerEvent } from "react";
type ClickwheelResult = {
    onPointerDown: (event: PointerEvent) => void;
    onPointerMove: (event: PointerEvent) => void;
    onPointerUp: (event: PointerEvent) => void;
};

type Rotation = -1 | 0 | 1;

export function useClickwheel(
    onRotate: (direction: Rotation) => void,
): ClickwheelResult {
    const isDragging = useRef(false);
    const previousAngle = useRef<number | null>(null);
    const center = useRef<{ x: number; y: number } | null>(null);
    const accumulatedDelta = useRef(0);
    const threshold = Math.PI / 4;

    const onPointerDown = (event: PointerEvent) => {
        event.preventDefault();
        const wheel = event.currentTarget as HTMLElement;
        const rect = wheel.getBoundingClientRect();

        wheel.setPointerCapture(event.pointerId);

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        center.current = { x: centerX, y: centerY };

        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;

        const angle = Math.atan2(dy, dx);

        isDragging.current = true;
        previousAngle.current = angle;
    };

    const onPointerMove = (event: PointerEvent) => {
        event.preventDefault();
        if (
            isDragging.current &&
            center.current !== null &&
            previousAngle.current !== null
        ) {
            const dx = event.clientX - center.current.x;
            const dy = event.clientY - center.current.y;

            const angle = Math.atan2(dy, dx);

            const delta = Math.atan2(
                Math.sin(angle - previousAngle.current),
                Math.cos(angle - previousAngle.current),
            );

            accumulatedDelta.current += delta;

            if (Math.abs(accumulatedDelta.current) >= threshold) {
                const direction = Math.sign(
                    accumulatedDelta.current,
                ) as Rotation;

                onRotate(direction);

                accumulatedDelta.current -= direction * threshold;
            }

            previousAngle.current = angle;
        }
    };

    const onPointerUp = (event: PointerEvent) => {
        event.preventDefault();
        isDragging.current = false;
        previousAngle.current = null;
        center.current = null;
        accumulatedDelta.current = 0;

        onRotate(0);

        const wheel = event.currentTarget as Element;
        wheel.releasePointerCapture(event.pointerId);
    };

    return {
        onPointerDown,
        onPointerMove,
        onPointerUp,
    };
}
