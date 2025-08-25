<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vibe Coding: Graph Development Made Human</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            color: white;
            overflow: hidden;
        }

        .presentation-container {
            width: 100vw;
            height: 100vh;
            position: relative;
        }

        .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
            padding: 60px;
            text-align: center;
        }

        .slide.active {
            opacity: 1;
            transform: translateX(0);
        }

        .slide.prev {
            transform: translateX(-100%);
        }

        /* Graph-inspired background elements */
        .slide::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 30%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(161, 255, 206, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        .slide-content {
            max-width: 900px;
            width: 100%;
            z-index: 10;
            position: relative;
        }

        h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }

        h2 {
            font-size: 2.8rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
            color: #fff;
        }

        .subtitle {
            font-size: 1.4rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            font-weight: 300;
            color: #a0c4ff;
        }

        .problem-text {
            font-size: 1.3rem;
            line-height: 1.8;
            margin-bottom: 2rem;
            text-align: left;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            background: rgba(255, 107, 107, 0.1);
            padding: 2rem;
            border-radius: 15px;
            border-left: 4px solid #ff6b6b;
        }

        .solution-text {
            font-size: 1.3rem;
            line-height: 1.8;
            margin-bottom: 2rem;
            text-align: left;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            background: rgba(161, 255, 206, 0.1);
            padding: 2rem;
            border-radius: 15px;
            border-left: 4px solid #a1ffce;
        }

        .story-text {
            font-size: 1.3rem;
            line-height: 1.8;
            margin-bottom: 2rem;
            text-align: left;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .highlight {
            background: linear-gradient(120deg, rgba(79, 172, 254, 0.3) 0%, rgba(0, 242, 254, 0.3) 100%);
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: 600;
            color: #4facfe;
        }

        .pain-highlight {
            background: linear-gradient(120deg, rgba(255, 107, 107, 0.3) 0%, rgba(255, 159, 159, 0.3) 100%);
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: 600;
            color: #ff6b6b;
        }

        .demo-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin: 3rem 0;
            align-items: center;
        }

        .demo-step {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid rgba(79, 172, 254, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .demo-step:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(79, 172, 254, 0.2);
        }

        .demo-before {
            border-left: 4px solid #ff6b6b;
        }

        .demo-after {
            border-left: 4px solid #a1ffce;
        }

        .code-example {
            background: rgba(0, 0, 0, 0.6);
            border-radius: 10px;
            padding: 2rem;
            margin: 2rem 0;
            font-family: 'Fira Code', monospace;
            text-align: left;
            border-left: 4px solid #4facfe;
            font-size: 0.9rem;
        }

        .navigation {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            gap: 15px;
            z-index: 1000;
        }

        .nav-btn {
            background: rgba(79, 172, 254, 0.2);
            border: 1px solid rgba(79, 172, 254, 0.5);
            border-radius: 50px;
            color: white;
            padding: 12px 20px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
            background: rgba(79, 172, 254, 0.4);
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(79, 172, 254, 0.3);
        }

        .slide-counter {
            position: fixed;
            bottom: 30px;
            left: 30px;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 0.9rem;
            border: 1px solid rgba(79, 172, 254, 0.3);
        }

        .iron-man-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 3rem 0;
            gap: 3rem;
        }

        .iron-man-side {
            flex: 1;
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(79, 172, 254, 0.3);
        }

        .iron-man-robot {
            border-left: 4px solid #ff6b6b;
        }

        .iron-man-suit {
            border-left: 4px solid #a1ffce;
        }

        .vs {
            font-size: 2rem;
            font-weight: 700;
            color: #4facfe;
        }

        .big-quote {
            font-size: 1.8rem;
            font-style: italic;
            margin: 2rem 0;
            padding: 2rem;
            background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
            border-radius: 15px;
            border-left: 5px solid #4facfe;
            text-align: center;
        }

        .karpathy-quote {
            color: #4facfe;
            font-weight: 600;
        }

        .reveal-container {
            text-align: center;
            padding: 4rem 2rem;
        }

        .reveal-text {
            font-size: 1.8rem;
            margin-bottom: 3rem;
            line-height: 1.6;
        }

        .reveal-highlight {
            background: linear-gradient(45deg, #ff6b6b, #4facfe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            font-size: 2.2rem;
        }

        .graph-visual {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            opacity: 0.1;
        }

        .node {
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: radial-gradient(circle, #4facfe, #0066cc);
            animation: pulse 3s ease-in-out infinite;
        }

        .edge {
            position: absolute;
            height: 2px;
            background: linear-gradient(90deg, #4facfe, transparent);
            animation: flow 2s linear infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes flow {
            0% { opacity: 0; transform: scaleX(0); }
            50% { opacity: 1; transform: scaleX(1); }
            100% { opacity: 0; transform: scaleX(0); }
        }

        .slide-11 {
            background: linear-gradient(135deg, #ff6b6b 0%, #4facfe 100%);
        }

        .slide-12 {
            background: linear-gradient(135deg, #a1ffce 0%, #4facfe 100%);
        }

        @media (max-width: 768px) {
            .slide {
                padding: 30px 20px;
            }
            h1 {
                font-size: 2.5rem;
            }
            h2 {
                font-size: 2rem;
            }
            .story-text, .problem-text, .solution-text {
                font-size: 1.1rem;
            }
            .demo-container, .iron-man-container {
                grid-template-columns: 1fr;
                flex-direction: column;
            }
        }

        .best-practices {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
        }

        .practices-column {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }

        .do {
            border-left: 4px solid #a1ffce;
        }

        .dont {
            border-left: 4px solid #ff6b6b;
        }
    </style>
</head>
<body>
    <div class="presentation-container">
        <!-- Background Graph Elements -->
        <div class="graph-visual">
            <div class="node" style="top: 10%; left: 20%;"></div>
            <div class="node" style="top: 20%; right: 15%;"></div>
            <div class="node" style="bottom: 30%; left: 10%;"></div>
            <div class="node" style="bottom: 20%; right: 20%;"></div>
            <div class="edge" style="top: 15%; left: 25%; width: 200px; transform: rotate(45deg);"></div>
            <div class="edge" style="bottom: 25%; right: 15%; width: 150px; transform: rotate(-30deg);"></div>
        </div>

        <!-- Slide 1: Clear Title -->
        <div class="slide active">
            <div class="slide-content">
                <h1>Vibe Coding</h1>
                <p class="subtitle">Building Graph Applications Through Natural Language</p>
                <p class="story-text">
                    <em>What if creating complex graph visualizations was as easy as having a conversation?</em>
                </p>
                <div class="big-quote">
                    "The hottest new programming language is English."
                    <br><small class="karpathy-quote">- Andrej Karpathy</small>
                </div>
            </div>
        </div>

        <!-- Slide 2: Our Pain Point -->
        <div class="slide">
            <div class="slide-content">
                <h2>The Problem We All Know</h2>
                <div class="problem-text">
                    <strong>Your pain point:</strong> Complex graph data preparation feels <span class="pain-highlight">too technical and time-consuming</span>.
                </div>
                <p class="story-text">
                    You spend more time wrestling with APIs than exploring insights.
                </p>
            </div>
        </div>

        <!-- Slide 3: What We're Going to Demo -->
        <div class="slide">
            <div class="slide-content">
                <h2>What We're Going to Explore</h2>
                <div class="solution-text">
                    <strong>Today's demo:</strong> Using <span class="highlight">vibe coding with Grove</span> to generate GraphXR API code.
                </div>
                <p class="story-text">
                    Natural language → AI → proper Grove code.
                </p>
                <p class="story-text">
                    <em>Stay tuned for the full Grove demo video coming to Slack soon!</em>
                </p>
            </div>
        </div>

        <!-- Slide 4: Demo Step 1 -->
        <div class="slide">
            <div class="slide-content">
                <h2>Demo: The Traditional Way vs Vibe Coding</h2>
                <div class="demo-container">
                    <div class="demo-step demo-before">
                        <h3>😤 The Old Way</h3>
                        <div class="code-example">
// Traditional Grove coding
gxr.nodes({category: "Entity"}).forEach(node => {
  const label = node.properties.label;
  if (label === "Zeus") {
    node.properties.url = "https://...zeus.jpg";
  } else if (label === "Athena") {
    node.properties.url = "https://...athena.jpg";
  }
  // ... 20 more lines of repetitive code
});
                        </div>
                        <p>Learning API syntax, writing loops, handling edge cases...</p>
                    </div>
                    <div class="demo-step demo-after">
                        <h3>✨ The Vibe Way</h3>
                        <div class="code-example">
"I need to add URL properties to entity nodes 
where the label matches specific names..."

// AI generates proper Grove/GraphXR API code:
// gxr.nodes({category: "Entity"}).forEach(...)
// with proper syntax and error handling
                        </div>
                        <p>Describe what you want, AI handles the Grove implementation</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 5: How This Solves the Macro Pain -->
        <div class="slide">
            <div class="slide-content">
                <h2>How This Addresses Your Pain</h2>
                <p class="story-text">
                    <strong>Step by step, this approach eliminates friction:</strong>
                </p>
                <div class="solution-text">
                    <strong>1. No API Learning Curve:</strong> You describe what you want instead of learning Grove/GraphXR syntax<br><br>
                    <strong>2. Faster Iteration:</strong> Modify data structures by updating your description, not rewriting code<br><br>
                    <strong>3. Focus on Insights:</strong> Spend time exploring data patterns, not debugging implementation<br><br>
                    <strong>4. Accessible to Non-Coders:</strong> Domain experts can directly translate their knowledge into working graph applications
                </div>
            </div>
        </div>

        <!-- Slide 6: The Iron Man Principle -->
        <div class="slide">
            <div class="slide-content">
                <h2>The Right Kind of AI Partnership</h2>
                <div class="big-quote">
                    "We need more Iron Man suits, fewer Iron Man robots."
                    <br><small class="karpathy-quote">- Andrej Karpathy</small>
                </div>
                <div class="iron-man-container">
                    <div class="iron-man-side iron-man-robot">
                        <h3>🤖 Iron Man Robot</h3>
                        <p><strong>Autonomous AI:</strong><br>
                        • Full automation<br>
                        • No human oversight<br>
                        • High risk of errors<br>
                        • Black box decisions</p>
                    </div>
                    <div class="vs">VS</div>
                    <div class="iron-man-side iron-man-suit">
                        <h3>🦾 Iron Man Suit</h3>
                        <p><strong>Human-AI Partnership:</strong><br>
                        • AI amplifies human capability<br>
                        • Human maintains control<br>
                        • Transparent process<br>
                        • Best of both worlds</p>
                    </div>
                </div>
                <p class="story-text">
                    <em>AI does the generation, humans do the verification.</em>
                </p>
            </div>
        </div>

        <!-- Slide 7: Vibe Coding in Context -->
        <div class="slide">
            <div class="slide-content">
                <h2>Understanding Vibe Coding</h2>
                <p class="story-text">
                    Vibe coding isn't about replacing programming skills — it's about <span class="highlight">changing the interface</span>.
                </p>
                <div class="demo-container">
                    <div class="demo-step">
                        <h3>Traditional Coding</h3>
                        <p>You speak the computer's language<br>
                        Syntax, APIs, edge cases<br>
                        High barrier to entry</p>
                    </div>
                    <div class="demo-step">
                        <h3>Vibe Coding</h3>
                        <p>Computer speaks your language<br>
                        Natural descriptions<br>
                        Focus on the "what," not "how"</p>
                    </div>
                </div>
                <p class="story-text">
                    You're still programming — you're defining problems, making decisions, and building systems. You're just using a more natural interface.
                </p>
            </div>
        </div>

        <!-- Slide 8: Best Practices -->
        <div class="slide">
            <div class="slide-content">
                <h2>Vibe Coding Best Practices</h2>
                <div class="best-practices">
                    <div class="practices-column do">
                        <h3>✅ Do This</h3>
                        <p><strong>• Use Git religiously</strong><br>
                        AI can make mistakes<br><br>
                        <strong>• Review all generated code</strong><br>
                        Understand what it's doing<br><br>
                        <strong>• Test everything</strong><br>
                        Especially before production<br><br>
                        <strong>• Choose the right AI tool</strong><br>
                        Different tasks, different tools</p>
                    </div>
                    <div class="practices-column dont">
                        <h3>⚠️ Avoid This</h3>
                        <p><strong>• Blind trust in AI</strong><br>
                        Always verify outputs<br><br>
                        <strong>• Becoming too dependent</strong><br>
                        Keep learning fundamentals<br><br>
                        <strong>• Skipping code review</strong><br>
                        You need to understand your system<br><br>
                        <strong>• No version control</strong><br>
                        Recipe for disaster</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 9: Real Impact -->
        <div class="slide">
            <div class="slide-content">
                <h2>The Real Impact</h2>
                <p class="story-text">
                    This isn't just about writing less code. It's about <span class="highlight">democratizing graph development</span>.
                </p>
                <div class="solution-text">
                    <strong>For Data Scientists:</strong> Spend time on analysis, not data wrangling<br><br>
                    <strong>For Domain Experts:</strong> Directly translate knowledge into interactive visualizations<br><br>
                    <strong>For Developers:</strong> Focus on architecture and complex logic, let AI handle boilerplate<br><br>
                    <strong>For Teams:</strong> Faster prototyping, more iteration, better collaboration
                </div>
            </div>
        </div>

        <!-- Slide 10: Demo Conclusion -->
        <div class="slide">
            <div class="slide-content">
                <h2>What This Approach Solves</h2>
                <p class="story-text">
                    By using vibe coding with Grove, we can describe complex graph operations and let AI generate the proper GraphXR API code.
                </p>
                <div class="solution-text">
                    <strong>We eliminate:</strong><br>
                    • The need to memorize Grove API syntax<br>
                    • Time spent writing repetitive GraphXR operations<br>
                    • The barrier between graph concepts and technical implementation<br><br>
                    
                    <strong>We enable:</strong><br>
                    • Rapid prototyping with natural language<br>
                    • Focus on graph insights over API mechanics<br>
                    • Accessible graph development for domain experts
                </div>
                <p class="story-text">
                    <em>Full Grove demo video coming soon to showcase these capabilities!</em>
                </p>
            </div>
        </div>

        <!-- Slide 11: The Big Reveal Setup -->
        <div class="slide slide-11">
            <div class="slide-content">
                <h2>Now, Here's the Thing...</h2>
                <p class="story-text">
                    Throughout this presentation, I've been showing you how AI can transform the way we build graph applications.
                </p>
                <p class="story-text">
                    How natural language can replace complex coding.
                </p>
                <p class="story-text">
                    How the Iron Man suit principle creates better human-AI collaboration.
                </p>
                <p class="story-text">
                    But there's something I haven't told you yet...
                </p>
            </div>
        </div>

        <!-- Slide 12: The Big Reveal -->
        <div class="slide slide-12">
            <div class="slide-content">
                <div class="reveal-container">
                    <div class="reveal-text">
                        <span class="reveal-highlight">This presentation was created using vibe coding.</span>
                    </div>
                    <p class="story-text">
                        I described what I wanted to Claude and shared my Obsidian files — the same ones I use for my Knowledge Vault.
                    </p>
                    <p class="story-text">
                        <strong>It took 5 iterations</strong> and multiple revisions to get it right.
                    </p>
                    <div class="big-quote">
                        Perfect example of the Iron Man analogy we love in action.
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 13: Call to Action -->
        <div class="slide">
            <div class="slide-content">
                <h2>Your Turn to Experiment</h2>
                <p class="story-text">
                    The future of graph development isn't about replacing expertise with automation.
                </p>
                <p class="story-text">
                    It's about <span class="highlight">amplifying your domain knowledge</span> with AI assistance.
                </p>
                <div class="solution-text">
                    <strong>Start experimenting:</strong><br>
                    • Try vibe coding your next Grove task<br>
                    • Use AI for boilerplate, review the results<br>
                    • Focus on graph insights, not API syntax
                </div>
                <div class="big-quote">
                    The best developers solve problems, not write code.
                </div>
                <p class="subtitle">
                    💬 Join our discussions: <a href="https://discord.gg/w96TPbgZKe" style="color: #4facfe;">discord.gg/w96TPbgZKe</a><br>
                    📚 More notes: gustavo-kineviz.github.io/KnowledgeVault/
                </p>
            </div>
        </div>
    </div>

    <div class="navigation">
        <button class="nav-btn" onclick="previousSlide()">← Previous</button>
        <button class="nav-btn" onclick="nextSlide()">Next →</button>
    </div>

    <div class="slide-counter">
        <span id="current-slide">1</span> / <span id="total-slides">13</span>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        
        document.getElementById('total-slides').textContent = totalSlides;

        function showSlide(n) {
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev');
                if (index < n) {
                    slide.classList.add('prev');
                } else if (index === n) {
                    slide.classList.add('active');
                }
            });
            
            document.getElementById('current-slide').textContent = n + 1;
        }

        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        }

        function previousSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                previousSlide();
            }
        });

        // Initialize
        showSlide(currentSlide);
    </script>
</body>
</html>