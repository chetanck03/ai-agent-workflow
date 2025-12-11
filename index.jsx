import { useState } from 'react';
import { ChevronDown, ChevronUp, Plane, MapPin, Clock, DollarSign, User, Users, Phone, CheckCircle, XCircle, AlertTriangle, RefreshCw, Search, Utensils, Briefcase, ShoppingCart } from 'lucide-react';

const WorkflowSection = ({ title, icon: Icon, color, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-4 border-2 rounded-lg overflow-hidden" style={{ borderColor: color }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left transition-colors"
        style={{ backgroundColor: color + '20' }}
      >
        <div className="flex items-center gap-3">
          <Icon size={24} style={{ color }} />
          <h2 className="text-xl font-bold" style={{ color }}>{title}</h2>
        </div>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && (
        <div className="p-6 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const FlowStep = ({ number, title, description, color = "#2196F3", icon: Icon }) => (
  <div className="flex items-start gap-4 mb-4 p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderLeftColor: color }}>
    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: color }}>
      {Icon ? <Icon size={20} /> : number}
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const MessageBubble = ({ isAI, children }) => (
  <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-3`}>
    <div 
      className="max-w-[80%] p-3 rounded-lg shadow-sm"
      style={{ backgroundColor: isAI ? '#E8F5E9' : '#DCF8C6' }}
    >
      <div className="flex items-center gap-2 mb-1">
        {isAI ? '🤖 AI Agent' : '👤 User'}
      </div>
      <div className="text-gray-800">{children}</div>
    </div>
  </div>
);

const FlightCard = ({ airline, flightNo, origin, dest, depTime, arrTime, duration, price, index }) => (
  <div className="border border-gray-300 rounded-lg p-4 mb-3 bg-white relative">
    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
      {index}
    </div>
    <div className="ml-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-lg text-gray-800">
          {airline} {flightNo}
        </div>
        <div className="text-2xl font-bold text-green-600">{price}</div>
      </div>
      <div className="flex items-center gap-3 mb-2 text-gray-700">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-base">{origin}</span>
          <span className="text-sm text-gray-500">{depTime}</span>
        </div>
        <span className="text-gray-400 font-bold">→</span>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-base">{dest}</span>
          <span className="text-sm text-gray-500">{arrTime}</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>Duration: {duration}</span>
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Non-stop</span>
      </div>
    </div>
  </div>
);

const DecisionNode = ({ question, yesPath, noPath }) => (
  <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50 my-4">
    <div className="text-center font-bold mb-4 text-purple-700">{question}</div>
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2 border-green-400 rounded p-3 bg-green-50">
        <div className="font-bold text-green-700 mb-2">✅ YES</div>
        <div className="text-sm text-gray-700">{yesPath}</div>
      </div>
      <div className="border-2 border-red-400 rounded p-3 bg-red-50">
        <div className="font-bold text-red-700 mb-2">❌ NO</div>
        <div className="text-sm text-gray-700">{noPath}</div>
      </div>
    </div>
  </div>
);

function WhatsAppAIWorkflow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl shadow-2xl mb-6">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Plane size={40} />
            WhatsApp AI Agent - Flight Booking Workflow
          </h1>
          <p className="text-lg opacity-90">Complete Visual Workflow Guide</p>
        </div>

        {/* System Architecture */}
        <WorkflowSection title="System Architecture Overview" icon={ShoppingCart} color="#FF5722" defaultOpen={true}>
          <div className="mb-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border-2 border-orange-300">
            <h3 className="font-bold text-lg mb-3 text-orange-800">Complete System Overview</h3>
            <p className="text-sm text-gray-700 mb-3">
              The WhatsApp AI Agent is a conversational flight booking system that integrates multiple APIs and services to provide a seamless booking experience through WhatsApp messaging.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white p-2 rounded">
                <span className="font-semibold">Frontend:</span> WhatsApp Business API
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-semibold">Backend:</span> Node.js + Express.js
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-semibold">AI Engine:</span> Google Gemini 1.5 Flash
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-semibold">Flight Provider:</span> TBO API
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-semibold">Database:</span> MongoDB (NoSQL)
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-semibold">Caching:</span> Redis (Optional)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <div className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                <Phone size={20} />
                1. WhatsApp Business API
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Meta Cloud API Integration</li>
                <li>• Webhook for receiving messages</li>
                <li>• Real-time message delivery</li>
                <li>• Media support (images, docs)</li>
                <li>• Message templates</li>
              </ul>
            </div>
            
            <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
              <div className="font-bold text-purple-700 mb-2">2. Node.js Backend</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Express.js REST API</li>
                <li>• Request validation</li>
                <li>• Session management</li>
                <li>• Error handling & logging</li>
                <li>• API rate limiting</li>
              </ul>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
              <div className="font-bold text-green-700 mb-2">3. Google Gemini AI</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Natural Language Processing</li>
                <li>• Intent classification</li>
                <li>• Entity extraction (dates, cities)</li>
                <li>• Context-aware responses</li>
                <li>• Conversation history</li>
              </ul>
            </div>
            
            <div className="bg-orange-100 p-4 rounded-lg border-2 border-orange-300">
              <div className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <Plane size={20} />
                4. TBO Flight API
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Flight search (multi-city support)</li>
                <li>• Fare quotation & rules</li>
                <li>• SSR (meals, seats, baggage)</li>
                <li>• Booking & ticketing</li>
                <li>• Cancellation & modifications</li>
              </ul>
            </div>
            
            <div className="bg-indigo-100 p-4 rounded-lg border-2 border-indigo-300">
              <div className="font-bold text-indigo-700 mb-2">5. MongoDB Database</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• User session storage</li>
                <li>• Booking records</li>
                <li>• Search result caching</li>
                <li>• User preferences</li>
                <li>• Conversation logs</li>
              </ul>
            </div>

            <div className="bg-pink-100 p-4 rounded-lg border-2 border-pink-300">
              <div className="font-bold text-pink-700 mb-2">6. Additional Services</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Email service (Nodemailer)</li>
                <li>• SMS gateway integration</li>
                <li>• Payment gateway (future)</li>
                <li>• Analytics & reporting</li>
                <li>• Webhook notifications</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-100 p-5 rounded-lg border-2 border-gray-300">
            <div className="font-bold mb-4 text-center text-lg">Complete Data Flow Architecture</div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-blue-500 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 1</div>
                <span>User sends message via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-green-500 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 2</div>
                <span>Meta API receives and forwards to webhook (Node.js)</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-purple-500 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 3</div>
                <span>Node.js processes webhook, extracts message content</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-orange-500 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 4</div>
                <span>Gemini AI analyzes message (intent + entities extraction)</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-red-500 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 5</div>
                <span>MongoDB checks/updates session state and context</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-indigo-500 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 6</div>
                <span>TBO API called for flight operations (search/book/ticket)</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-teal-500 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 7</div>
                <span>Response formatted and sent back through Meta API</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white p-3 rounded">
                <div className="bg-blue-600 text-white px-3 py-1 rounded font-semibold min-w-[120px] text-center">Step 8</div>
                <span>User receives response in WhatsApp chat</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
              <h4 className="font-bold text-yellow-800 mb-3">API Endpoints Used</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">
                  <span className="font-semibold">WhatsApp:</span> POST /messages, GET /webhooks
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-semibold">Gemini:</span> POST /generateContent
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-semibold">TBO:</span> /flights/search, /book, /ticket
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-semibold">MongoDB:</span> sessions, bookings, cache
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-3">Key Features</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Natural language understanding</span>
                </div>
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Real-time flight availability</span>
                </div>
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Automated booking process</span>
                </div>
                <div className="bg-white p-2 rounded flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Session persistence</span>
                </div>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Main User Journey */}
        <WorkflowSection title="1. Conversation Initiation" icon={Phone} color="#25D366">
          <div className="mb-4 p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">User Interaction Example</h4>
            <p className="text-sm text-gray-700">User starts conversation by sending a natural language message about flight booking</p>
          </div>

          <MessageBubble isAI={false}>
            I want to book a flight from Delhi to Mumbai tomorrow
          </MessageBubble>
          <MessageBubble isAI={true}>
            Searching flights from Delhi to Mumbai...
            <div className="mt-2 flex items-center gap-2">
              <RefreshCw className="animate-spin" size={16} />
              <span className="text-sm">Searching flights...</span>
            </div>
          </MessageBubble>
          
          <div className="mt-4 space-y-3">
            <FlowStep 
              number="1"
              title="Message Received"
              description="User sends message → WhatsApp delivers to Meta Cloud API → Webhook triggers POST request to Node.js server at /webhook endpoint"
              color="#25D366"
            />
            <FlowStep 
              number="2"
              title="Webhook Processing"
              description="Node.js validates webhook signature, extracts message content, sender ID, and timestamp. Creates or retrieves user session from MongoDB"
              color="#2196F3"
            />
            <FlowStep 
              number="3"
              title="NLP Processing"
              description="Message sent to Gemini AI API with conversation context. AI extracts: Intent='book_flight', Origin='Delhi', Destination='Mumbai', Date='tomorrow'"
              color="#4CAF50"
            />
            <FlowStep 
              number="4"
              title="Entity Validation"
              description="System validates extracted entities: Converts 'Delhi' to DEL airport code, 'Mumbai' to BOM, 'tomorrow' to actual date (YYYY-MM-DD format)"
              color="#FF9800"
            />
            <FlowStep 
              number="5"
              title="Flight Search API Call"
              description="Node.js calls TBO API POST /flights/search with parameters: origin=DEL, destination=BOM, date=2024-03-15, adults=1, class=Economy"
              color="#9C27B0"
            />
            <FlowStep 
              number="6"
              title="Result Processing"
              description="TBO returns flight data with TraceId. Results cached in MongoDB for 15 minutes. Top flights sorted by price and displayed to user"
              color="#F44336"
            />
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold mb-3 text-blue-800">Technical Implementation Details</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">Webhook Security:</div>
                <p className="text-gray-700">Verifies X-Hub-Signature-256 header to ensure requests are from Meta</p>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">Session Management:</div>
                <p className="text-gray-700">MongoDB stores session with fields: userId, state, context, lastMessage, expiresAt</p>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">AI Prompt Engineering:</div>
                <p className="text-gray-700">System prompt instructs Gemini to extract structured data: origin, destination, date, passengers, class</p>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">Error Handling:</div>
                <p className="text-gray-700">Try-catch blocks at each step with fallback responses and retry logic for API failures</p>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Flight Search Results */}
        <WorkflowSection title="2. Flight Search Results Display" icon={Search} color="#2196F3">
          <MessageBubble isAI={true}>
            <div>Found 25 flights! Here are top options:</div>
          </MessageBubble>
          
          <div className="mt-4">
            <FlightCard 
              airline="Air India"
              flightNo="AI-123"
              origin="DEL"
              dest="BOM"
              depTime="08:00 AM"
              arrTime="10:30 AM"
              duration="2h 30m"
              price="₹5,500"
              index={1}
            />
            <FlightCard 
              airline="IndiGo"
              flightNo="6E-456"
              origin="DEL"
              dest="BOM"
              depTime="10:00 AM"
              arrTime="12:30 PM"
              duration="2h 30m"
              price="₹4,800"
              index={2}
            />
            <FlightCard 
              airline="Vistara"
              flightNo="UK-789"
              origin="DEL"
              dest="BOM"
              depTime="02:00 PM"
              arrTime="04:30 PM"
              duration="2h 30m"
              price="₹6,200"
              index={3}
            />
          </div>
          
          <MessageBubble isAI={true}>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="font-semibold mb-2">How to Select:</div>
              <div className="text-sm">Reply with flight number (e.g., type "1" for Air India)</div>
            </div>
          </MessageBubble>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold mb-2">System Process:</h4>
            <ol className="space-y-2 text-sm">
              <li>1. User message parsed by Gemini AI</li>
              <li>2. TBO API called with search parameters</li>
              <li>3. Results cached in MongoDB</li>
              <li>4. Top 3 flights formatted and displayed</li>
              <li>5. Session state updated to "SHOWING_RESULTS"</li>
            </ol>
          </div>
        </WorkflowSection>

        {/* Flight Selection */}
        <WorkflowSection title="3. Flight Selection & Confirmation" icon={CheckCircle} color="#4CAF50">
          <MessageBubble isAI={false}>1</MessageBubble>
          <MessageBubble isAI={true}>
            <div className="space-y-3">
              <div className="font-bold">✅ Selected Air India AI-123</div>
              
              <div className="border-t pt-2">
                <div className="font-semibold mb-2">Flight Details:</div>
                <ul className="space-y-1 text-sm">
                  <li>• Departure: 08:00 AM from Delhi (DEL)</li>
                  <li>• Arrival: 10:30 AM in Mumbai (BOM)</li>
                  <li>• Duration: 2h 30m</li>
                  <li>• Aircraft: Boeing 737</li>
                </ul>
              </div>
              
              <div className="border-t pt-2">
                <div className="font-semibold mb-2">Fare Breakdown:</div>
                <ul className="space-y-1 text-sm">
                  <li>• Base Fare: ₹5,000</li>
                  <li>• Taxes & Fees: ₹500</li>
                  <li className="font-bold">• Total: ₹5,500</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <RefreshCw size={14} />
                Verifying current price...
              </div>
            </div>
          </MessageBubble>

          <div className="my-4 space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-2 text-blue-800">System Process - Flight Selection</h4>
              <ol className="space-y-2 text-sm">
                <li><span className="font-semibold">1. Input Parsing:</span> User's "1" is parsed and validated against available options</li>
                <li><span className="font-semibold">2. Data Retrieval:</span> Flight data retrieved from MongoDB cache using search TraceId</li>
                <li><span className="font-semibold">3. Result Key Extraction:</span> System extracts ResultIndex from cached results</li>
                <li><span className="font-semibold">4. Session Update:</span> MongoDB session updated with selected flight details and state='FLIGHT_SELECTED'</li>
              </ol>
            </div>
          </div>

          <DecisionNode 
            question="Is Price Changed?"
            yesPath="Show price difference → Get user confirmation → Continue or show alternatives"
            noPath="Price confirmed → Proceed to service selection"
          />

          <div className="mt-4 space-y-3">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold mb-2 text-green-800">Fare Quote Verification Process</h4>
              <ol className="space-y-2 text-sm">
                <li><span className="font-semibold">1. API Call:</span> POST /flights/fare-quote with TraceId and ResultIndex</li>
                <li><span className="font-semibold">2. Price Comparison:</span> Compare cached price vs current TBO price</li>
                <li><span className="font-semibold">3. IsPriceChanged Check:</span> If prices differ, calculate difference and notify user</li>
                <li><span className="font-semibold">4. Fare Rules:</span> Retrieve cancellation policy, baggage allowance, and restrictions</li>
                <li><span className="font-semibold">5. Session Update:</span> Store FareQuote response with new TraceId for booking</li>
              </ol>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold mb-2 text-yellow-800">Price Change Handling</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">
                  <span className="font-semibold">If Price Increased:</span> Show alert with old vs new price, ask for confirmation
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-semibold">If Price Decreased:</span> Notify user of savings and proceed automatically
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-semibold">If Unavailable:</span> Show "Flight no longer available" and display alternative flights
                </div>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Flight Type Decision */}
        <WorkflowSection title="4. Flight Type Detection" icon={Plane} color="#9C27B0">
          <div className="mb-4 p-4 bg-purple-50 rounded-lg border-2 border-purple-300">
            <h4 className="font-bold text-purple-800 mb-2">What is LCC vs Non-LCC?</h4>
            <p className="text-sm text-gray-700 mb-3">
              Low Cost Carriers (LCC) have different booking processes than full-service airlines. The system automatically detects the airline type from the TBO API response using the "IsLCC" flag.
            </p>
          </div>

          <DecisionNode 
            question="Check IsLCC (Low Cost Carrier)?"
            yesPath="LCC FLOW: IndiGo, SpiceJet, AirAsia → Direct Ticketing → SSR Required (Baggage, Meals, Seats mandatory)"
            noPath="NON-LCC FLOW: Air India, Vistara, Jet Airways → Book then Ticket → SSR Optional"
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
              <h3 className="font-bold text-orange-700 mb-3 text-lg">LCC Flow (Low Cost Carriers)</h3>
              
              <div className="mb-3 text-sm bg-white p-2 rounded">
                <span className="font-semibold">Airlines:</span> IndiGo (6E), SpiceJet (SG), AirAsia (I5), Go First (G8)
              </div>
              
              <div className="mb-3">
                <div className="font-semibold mb-2 text-sm">Booking Process:</div>
                <ol className="space-y-1 text-sm">
                  <li>1. Fare Quote with SSR details</li>
                  <li>2. Mandatory SSR selection (baggage, meals, seats)</li>
                  <li>3. Direct ticket issuance (no separate Book step)</li>
                  <li>4. Instant confirmation</li>
                </ol>
              </div>
              
              <div className="mb-3">
                <div className="font-semibold mb-2 text-sm">Characteristics:</div>
                <ul className="space-y-1 text-sm">
                  <li>✓ No free baggage (must purchase)</li>
                  <li>✓ No free meals (must purchase)</li>
                  <li>✓ Seat selection required</li>
                  <li>✓ Lower base fare</li>
                  <li>✓ Pay-per-service model</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded border border-orange-200">
                <div className="font-semibold mb-1 text-sm">API Sequence:</div>
                <div className="text-xs space-y-1">
                  <div>1. POST /flights/search</div>
                  <div>2. POST /flights/fare-quote</div>
                  <div>3. POST /flights/ssr (get options)</div>
                  <div>4. POST /flights/ticket (with SSR)</div>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold text-blue-700 mb-3 text-lg">Non-LCC Flow (Full Service)</h3>
              
              <div className="mb-3 text-sm bg-white p-2 rounded">
                <span className="font-semibold">Airlines:</span> Air India (AI), Vistara (UK), Jet Airways (9W), Air India Express (IX)
              </div>
              
              <div className="mb-3">
                <div className="font-semibold mb-2 text-sm">Booking Process:</div>
                <ol className="space-y-1 text-sm">
                  <li>1. Fare Quote verification</li>
                  <li>2. Create booking (Hold/Book)</li>
                  <li>3. Optional SSR addition</li>
                  <li>4. Ticket issuance (separate step)</li>
                  <li>5. Confirmation</li>
                </ol>
              </div>
              
              <div className="mb-3">
                <div className="font-semibold mb-2 text-sm">Characteristics:</div>
                <ul className="space-y-1 text-sm">
                  <li>✓ Free baggage allowance included</li>
                  <li>✓ Complimentary meals</li>
                  <li>✓ Seat selection optional</li>
                  <li>✓ Higher base fare</li>
                  <li>✓ More flexibility</li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded border border-blue-200">
                <div className="font-semibold mb-1 text-sm">API Sequence:</div>
                <div className="text-xs space-y-1">
                  <div>1. POST /flights/search</div>
                  <div>2. POST /flights/fare-quote</div>
                  <div>3. POST /flights/ssr (optional)</div>
                  <div>4. POST /flights/book</div>
                  <div>5. POST /flights/ticket</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold mb-3">System Detection Logic</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">Detection Method:</div>
                <p className="text-gray-700">TBO API returns "IsLCC": true/false in flight search results. System stores this flag in session data.</p>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">Flow Branching:</div>
                <p className="text-gray-700">Based on IsLCC flag, system determines whether to show mandatory SSR selection or proceed directly to passenger details.</p>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">User Experience:</div>
                <p className="text-gray-700">For LCC: "Please select baggage, meal, and seat (required)". For Non-LCC: "Would you like to add services? (optional)"</p>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Service Selection */}
        <WorkflowSection title="5. Service Selection (SSR)" icon={Utensils} color="#FF9800">
          <div className="mb-4 p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
            <h4 className="font-bold text-orange-800 mb-2">What is SSR?</h4>
            <p className="text-sm text-gray-700">
              SSR (Special Service Request) includes additional services like meals, baggage, and seat selection. These are fetched from TBO API and presented to the user based on availability.
            </p>
          </div>

          <MessageBubble isAI={true}>
            <div className="space-y-3">
              <div className="font-bold">Would you like to add any services?</div>
              
              <div className="border-t pt-2">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  MEAL PREFERENCES:
                </div>
                <div className="space-y-1 text-sm">
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">1.</span> Vegetarian Meal - ₹200
                    <div className="text-xs text-gray-600">Code: VGML</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">2.</span> Non-Vegetarian Meal - ₹250
                    <div className="text-xs text-gray-600">Code: NVML</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">3.</span> Jain Meal - ₹200
                    <div className="text-xs text-gray-600">Code: JNML</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">4.</span> No meal preference
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-2">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  SEAT PREFERENCES:
                </div>
                <div className="space-y-1 text-sm">
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">1.</span> Window Seat
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">2.</span> Aisle Seat
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">3.</span> No preference
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-2">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  BAGGAGE (LCC Only):
                </div>
                <div className="space-y-1 text-sm">
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">1.</span> 15 KG - ₹500
                    <div className="text-xs text-gray-600">Code: 15KG</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">2.</span> 20 KG - ₹800
                    <div className="text-xs text-gray-600">Code: 20KG</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-semibold">3.</span> 25 KG - ₹1,200
                    <div className="text-xs text-gray-600">Code: 25KG</div>
                  </div>
                </div>
              </div>
            </div>
          </MessageBubble>

          <div className="mt-4 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-3 text-blue-800">SSR API Integration Process</h4>
              <ol className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">1. SSR Request:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    POST /flights/ssr with TraceId, ResultIndex
                  </div>
                </li>
                <li>
                  <span className="font-semibold">2. Response Processing:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    TBO returns available: Meals[], Seats[], Baggage[]
                  </div>
                </li>
                <li>
                  <span className="font-semibold">3. Data Formatting:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    System formats SSR data into user-friendly options with prices
                  </div>
                </li>
                <li>
                  <span className="font-semibold">4. User Selection:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    User replies with option numbers (e.g., "1, 2, 3")
                  </div>
                </li>
                <li>
                  <span className="font-semibold">5. Validation:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    System validates selections and calculates total price
                  </div>
                </li>
                <li>
                  <span className="font-semibold">6. Session Update:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    Selected SSR codes stored in MongoDB session
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                <h4 className="font-bold mb-2 text-green-800">SSR Data Structure</h4>
                <div className="bg-white p-3 rounded text-xs font-mono">
                  <pre>{`{
  "Meal": [
    {
      "Code": "VGML",
      "Description": "Veg Meal",
      "Price": 200,
      "Currency": "INR"
    }
  ],
  "Baggage": [
    {
      "Code": "15KG",
      "Weight": 15,
      "Price": 500
    }
  ],
  "Seat": [
    {
      "Code": "12A",
      "Type": "Window",
      "Price": 200
    }
  ]
}`}</pre>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
                <h4 className="font-bold mb-2 text-yellow-800">Mandatory vs Optional</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white p-2 rounded">
                    <div className="font-semibold">LCC - Mandatory:</div>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Baggage must be selected</li>
                      <li>• Cannot proceed without SSR</li>
                      <li>• System enforces selection</li>
                    </ul>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <div className="font-semibold">Non-LCC - Optional:</div>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• User can skip SSR</li>
                      <li>• Basic services included</li>
                      <li>• System allows "No thanks"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold mb-3 text-purple-800">User Input Handling</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold mb-1">Natural Language Processing:</div>
                  <p className="text-gray-700">User can reply with: "1, 2" or "vegetarian meal and window seat" or "skip meals"</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold mb-1">Validation Rules:</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Check if selection IDs are valid</li>
                    <li>• Verify SSR availability</li>
                    <li>• Calculate total additional cost</li>
                    <li>• Confirm selections with user</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Passenger Information */}
        <WorkflowSection title="6. Passenger Information Collection" icon={User} color="#E91E63">
          <div className="mb-4 p-4 bg-pink-50 rounded-lg border-2 border-pink-300">
            <h4 className="font-bold text-pink-800 mb-2">Passenger Data Requirements</h4>
            <p className="text-sm text-gray-700">
              All passenger details must match government-issued ID for successful boarding. System validates format and completeness before proceeding.
            </p>
          </div>

          <MessageBubble isAI={true}>
            <div className="space-y-3">
              <div className="font-bold">Great! Now I need passenger details:</div>
              
              <div className="bg-white p-3 rounded border">
                <div className="font-semibold mb-2">Please provide:</div>
                <ol className="space-y-1 text-sm">
                  <li>1. Full Name (as per ID)</li>
                  <li>2. Date of Birth (DD/MM/YYYY)</li>
                  <li>3. Gender (Male/Female)</li>
                  <li>4. Contact Number</li>
                  <li>5. Email Address</li>
                </ol>
              </div>
              
              <div className="bg-blue-50 p-2 rounded text-sm">
                💡 Example format:<br/>
                "John Doe, 15/01/1990, Male, 9876543210, john@email.com"
              </div>
            </div>
          </MessageBubble>

          <MessageBubble isAI={false}>
            John Doe, 15/01/1990, Male, 9876543210, john@email.com
          </MessageBubble>

          <MessageBubble isAI={true}>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span className="text-sm">Validating passenger details...</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span className="text-sm">All details verified!</span>
              </div>
            </div>
          </MessageBubble>

          <div className="mt-4 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-3 text-blue-800">Data Parsing & Validation Process</h4>
              <ol className="space-y-3 text-sm">
                <li>
                  <span className="font-semibold">1. Natural Language Parsing:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    Gemini AI extracts structured data from user's natural language input
                  </div>
                </li>
                <li>
                  <span className="font-semibold">2. Field Validation:</span>
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Name:</span> Min 2 chars, max 50 chars, alphabets only, no special characters
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">DOB:</span> Must be valid date, passenger must be 18+ for adult, 2-11 for child
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Gender:</span> Must be Male/Female/Other (as per airline requirements)
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Phone:</span> Must be 10 digits, valid Indian mobile number
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Email:</span> Valid email format with @ and domain
                    </div>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">3. Age Calculation:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    System calculates age from DOB and assigns passenger type: Adult (18+), Child (2-11), Infant (0-2)
                  </div>
                </li>
                <li>
                  <span className="font-semibold">4. Format Conversion:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    Convert to TBO API format: FirstName, LastName, Gender, DateOfBirth (YYYY-MM-DD), PassportNo (international)
                  </div>
                </li>
                <li>
                  <span className="font-semibold">5. Session Storage:</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    Store passenger data in MongoDB session with encrypted sensitive information
                  </div>
                </li>
              </ol>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-300">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Users size={20} />
                Multi-Passenger Support
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold mb-2 text-sm">Passenger 1 (Lead Passenger)</div>
                  <div className="text-xs space-y-1 text-gray-700">
                    <div>👨 <span className="font-semibold">Name:</span> John Doe (Adult)</div>
                    <div>📅 <span className="font-semibold">DOB:</span> 15/01/1990</div>
                    <div>📱 <span className="font-semibold">Contact:</span> +91-9876543210</div>
                    <div>📧 <span className="font-semibold">Email:</span> john@email.com</div>
                    <div className="mt-2 text-green-600 font-semibold">✅ Confirmed</div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold mb-2 text-sm">Passenger 2</div>
                  <div className="text-xs space-y-1 text-gray-700">
                    <div>👩 <span className="font-semibold">Name:</span> Jane Doe (Adult)</div>
                    <div>📅 <span className="font-semibold">DOB:</span> 20/05/1992</div>
                    <div className="mt-2 text-green-600 font-semibold">✅ Confirmed</div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold mb-2 text-sm">Passenger 3</div>
                  <div className="text-xs space-y-1 text-gray-700">
                    <div>👶 <span className="font-semibold">Type:</span> Child (2-11 years)</div>
                    <div className="text-blue-600">⏳ Awaiting details...</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 bg-yellow-50 p-2 rounded border border-yellow-300 text-xs">
                💡 <span className="font-semibold">Note:</span> For multiple passengers, system collects one at a time. Lead passenger contact details are used for booking confirmation.
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                <h4 className="font-bold mb-2 text-red-800">Common Validation Errors</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">❌ Invalid Name:</span> "John123" (contains numbers)
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">❌ Invalid DOB:</span> "32/13/2000" (impossible date)
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">❌ Invalid Phone:</span> "12345" (too short)
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">❌ Invalid Email:</span> "john@com" (no domain)
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                <h4 className="font-bold mb-2 text-green-800">Data Format for TBO API</h4>
                <div className="bg-white p-3 rounded text-xs font-mono">
                  <pre>{`{
  "Passengers": [
    {
      "Title": "Mr",
      "FirstName": "John",
      "LastName": "Doe",
      "PaxType": 1,
      "DateOfBirth": "1990-01-15",
      "Gender": 1,
      "AddressLine1": "Delhi",
      "CountryCode": "IN",
      "Nationality": "IN",
      "ContactNo": "9876543210",
      "Email": "john@email.com"
    }
  ]
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Booking Confirmation */}
        <WorkflowSection title="7. Booking Confirmation & Processing" icon={CheckCircle} color="#4CAF50">
          <div className="mb-4 p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">Final Confirmation Stage</h4>
            <p className="text-sm text-gray-700">
              Before booking, system displays complete summary for user verification. This is the last chance to modify details before payment.
            </p>
          </div>

          <MessageBubble isAI={true}>
            <div className="space-y-3">
              <div className="font-bold text-lg">Please confirm your booking details:</div>
              
              <div className="bg-white p-3 rounded border-2 border-blue-300">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  FLIGHT DETAILS:
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Air India AI-123</li>
                  <li>• Delhi (DEL) → Mumbai (BOM)</li>
                  <li>• 15 March 2024, 08:00 AM - 10:30 AM</li>
                  <li>• Duration: 2h 30m | Non-stop</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border-2 border-purple-300">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  PASSENGER:
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Mr. John Doe</li>
                  <li>• DOB: 15 Jan 1990 (Adult)</li>
                  <li>• Contact: +91-9876543210</li>
                  <li>• Email: john@email.com</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border-2 border-orange-300">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  SERVICES:
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Vegetarian Meal (+₹200)</li>
                  <li>• Window Seat (No charge)</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-lg text-white text-center">
                <div className="text-sm">TOTAL AMOUNT</div>
                <div className="text-3xl font-bold">₹5,700</div>
                <div className="text-xs mt-1">All taxes and fees included</div>
              </div>
              
              <div className="text-center text-sm border-t pt-2">
                <div className="font-semibold mb-1">❓ Is this correct?</div>
                <div>Reply "YES" to confirm or "NO" to modify</div>
              </div>
            </div>
          </MessageBubble>

          <MessageBubble isAI={false}>YES</MessageBubble>

          <MessageBubble isAI={true}>
            <div className="space-y-3">
              <div className="font-bold">Processing your booking...</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Validating details...</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Booking flight...</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="animate-spin text-blue-500" size={16} />
                  <span>Issuing ticket...</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>Sending confirmation...</span>
                </div>
              </div>
            </div>
          </MessageBubble>

          <div className="mt-4 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-3 text-blue-800">Complete Booking Process - Step by Step</h4>
              <ol className="space-y-3 text-sm">
                <li>
                  <span className="font-semibold">Step 1: User Confirmation</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    System receives "YES" and changes session state to "BOOKING"
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Step 2: Final Validation</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    Verify all required fields: passenger data, contact info, SSR selections, payment details
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Step 3: Book API Call (Non-LCC Only)</span>
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Endpoint:</span> POST /flights/book
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Payload:</span> TraceId, ResultIndex, Passengers[], SSR[]
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Response:</span> BookingId, PNR, Status, Amount
                    </div>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Step 4: Ticket Issuance</span>
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Endpoint:</span> POST /flights/ticket
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Payload:</span> BookingId, PNR
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Response:</span> TicketNumber, E-Ticket URL, Status="Confirmed"
                    </div>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Step 5: Database Storage</span>
                  <div className="ml-4 mt-1 bg-white p-2 rounded text-xs">
                    Save complete booking to MongoDB "bookings" collection with all details and timestamps
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Step 6: Notification Dispatch</span>
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">Email:</span> Send e-ticket PDF to passenger email
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">SMS:</span> Send booking confirmation with PNR to mobile number
                    </div>
                    <div className="bg-white p-2 rounded text-xs">
                      <span className="font-semibold">WhatsApp:</span> Send booking summary in chat
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                <h4 className="font-bold mb-2 text-purple-800">LCC vs Non-LCC Process</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold mb-1 text-orange-700">LCC Process:</div>
                    <ol className="text-xs space-y-1">
                      <li>1. Fare Quote with SSR</li>
                      <li>2. Direct Ticket (combined Book+Ticket)</li>
                      <li>3. Instant confirmation</li>
                    </ol>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold mb-1 text-blue-700">Non-LCC Process:</div>
                    <ol className="text-xs space-y-1">
                      <li>1. Fare Quote</li>
                      <li>2. Book (creates PNR)</li>
                      <li>3. Ticket (issues ticket)</li>
                      <li>4. Confirmation</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
                <h4 className="font-bold mb-2 text-yellow-800">Error Scenarios</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">Booking Fails:</span> Show error, offer retry or alternative flights
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">Ticket Fails:</span> Booking exists but not ticketed, manual intervention required
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">Timeout:</span> Check booking status via BookingId, inform user
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="font-semibold">Sold Out:</span> Flight no longer available, show alternatives
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-6 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-lg shadow-xl">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎉</div>
              <div className="text-3xl font-bold">BOOKING SUCCESSFUL!</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur p-4 rounded-lg space-y-2 text-sm">
                <div className="font-bold text-lg mb-2">BOOKING DETAILS:</div>
                <div>• PNR: ABC123</div>
                <div>• Booking ID: 12345678</div>
                <div>• Ticket: 098-1234567890</div>
                <div>• Status: Confirmed</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur p-4 rounded-lg space-y-2 text-sm">
                <div className="font-bold text-lg mb-2">FLIGHT INFO:</div>
                <div>• Air India AI-123</div>
                <div>• 15 March 2024</div>
                <div>• DEL 08:00 → BOM 10:30</div>
                <div>• Mr. John Doe</div>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm border-t border-white/30 pt-3">
              <div>📧 E-ticket sent to: john@email.com</div>
              <div>📱 SMS sent to: +91-9876543210</div>
            </div>
            
            <div className="mt-4 bg-white/10 p-3 rounded text-sm">
              <div className="font-semibold mb-2">Next Steps:</div>
              <ul className="space-y-1">
                <li>✓ Check your email for e-ticket</li>
                <li>✓ Web check-in opens 48 hours before flight</li>
                <li>✓ Carry valid photo ID to airport</li>
                <li>✓ Reach airport 2 hours before departure</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-500">
            <h4 className="font-bold mb-3">Database Record Structure</h4>
            <div className="bg-white p-3 rounded text-xs font-mono">
              <pre>{`{
  "_id": "65abc123...",
  "userId": "919876543210",
  "bookingId": "12345678",
  "pnr": "ABC123",
  "ticketNumber": "098-1234567890",
  "status": "Confirmed",
  "flight": {
    "airline": "Air India",
    "flightNumber": "AI-123",
    "origin": "DEL",
    "destination": "BOM",
    "departureDate": "2024-03-15",
    "departureTime": "08:00",
    "arrivalTime": "10:30"
  },
  "passenger": {
    "name": "John Doe",
    "dob": "1990-01-15",
    "gender": "Male",
    "contact": "9876543210",
    "email": "john@email.com"
  },
  "amount": 5700,
  "ssr": {
    "meal": "VGML",
    "seat": "Window"
  },
  "createdAt": "2024-03-10T14:30:00Z",
  "updatedAt": "2024-03-10T14:32:00Z"
}`}</pre>
            </div>
          </div>
        </WorkflowSection>

        {/* Booking Status Check */}
        <WorkflowSection title="8. Booking Status Check" icon={Search} color="#2196F3">
          <MessageBubble isAI={false}>Check my booking ABC123</MessageBubble>
          <MessageBubble isAI={true}>
            <div className="space-y-2">
              <div>Fetching booking details...</div>
              <div className="flex items-center gap-2">
                <Search className="animate-pulse" size={16} />
                <span className="text-sm">Searching booking...</span>
              </div>
            </div>
          </MessageBubble>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
            <div className="font-bold text-blue-700 mb-3 text-lg">📋 BOOKING STATUS</div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">🆔 PNR: ABC123</div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={16} />
                  Status: Confirmed & Ticketed
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-2">✈️ FLIGHT DETAILS:</div>
                <ul className="space-y-1">
                  <li>• Air India AI-123</li>
                  <li>• Delhi (DEL) → Mumbai (BOM)</li>
                  <li>• 15 March 2024</li>
                  <li>• Departure: 08:00 AM</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-2">👤 PASSENGER:</div>
                <div>• Mr. John Doe</div>
              </div>
              
              <div className="bg-white p-3 rounded font-bold">
                💰 FARE: ₹5,700
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Cancellation Flow */}
        <WorkflowSection title="9. Cancellation Flow" icon={XCircle} color="#F44336">
          <MessageBubble isAI={false}>Cancel my booking ABC123</MessageBubble>
          <MessageBubble isAI={true}>
            <div className="space-y-2">
              <div>Checking cancellation charges...</div>
              <div className="flex items-center gap-2">
                <DollarSign className="animate-pulse" size={16} />
                <span className="text-sm">Calculating refund...</span>
              </div>
            </div>
          </MessageBubble>

          <div className="mt-4 p-4 bg-red-50 rounded-lg border-2 border-red-300">
            <div className="font-bold text-red-700 mb-3 text-lg">💰 CANCELLATION DETAILS</div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded">
                <div className="mb-2">📋 Booking: ABC123</div>
                <div>✈️ Flight: Air India AI-123 (15 March 2024)</div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-2">💸 REFUND CALCULATION:</div>
                <ul className="space-y-1">
                  <li>• Original Fare: ₹5,700</li>
                  <li className="text-red-600">• Cancellation Charge: ₹1,000</li>
                  <li className="font-bold text-green-600">• Refund Amount: ₹4,700</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="text-yellow-600" size={16} />
                  IMPORTANT:
                </div>
                <ul className="space-y-1">
                  <li>• Refund processed in 7-10 business days</li>
                  <li>• This action cannot be undone</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-3 text-center text-sm">
              ❓ Are you sure you want to cancel?<br/>
              Reply "CONFIRM" to proceed or "CANCEL" to keep booking
            </div>
          </div>

          <MessageBubble isAI={false}>CONFIRM</MessageBubble>
          
          <div className="mt-4 p-6 bg-green-100 rounded-lg border-2 border-green-400">
            <div className="text-center mb-4">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={48} />
              <div className="text-2xl font-bold text-green-700">CANCELLATION SUCCESSFUL</div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">📋 DETAILS:</div>
                <ul className="space-y-1">
                  <li>• PNR: ABC123 - CANCELLED</li>
                  <li>• Request ID: CR123456</li>
                  <li>• Refund Amount: ₹4,700</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-1">💰 REFUND TIMELINE:</div>
                <ul className="space-y-1">
                  <li>• Processing: 7-10 business days</li>
                  <li>• Method: Original payment source</li>
                </ul>
              </div>
              
              <div className="text-center">
                📧 Confirmation sent to: john@email.com
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Error Handling */}
        <WorkflowSection title="10. Error Handling Scenarios" icon={AlertTriangle} color="#FF9800">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <XCircle size={20} />
                Network/API Errors
              </h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">⚠️ Unable to connect to booking system</div>
                <div className="bg-white p-2 rounded">🔄 Retrying automatically...</div>
                <div className="bg-white p-2 rounded">💡 Please wait a moment</div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
                <AlertTriangle size={20} />
                Validation Errors
              </h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">❌ Invalid email format</div>
                <div className="bg-white p-2 rounded">❌ Phone number must be 10 digits</div>
                <div className="bg-white p-2 rounded">❌ Child age doesn't match</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
            <h4 className="font-bold text-yellow-700 mb-3">Price Change Alert</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-3 rounded">
                <div className="font-semibold mb-2">💰 PRICE ALERT</div>
                <ul className="space-y-1">
                  <li>Old Price: ₹5,500</li>
                  <li>New Price: ₹6,000</li>
                  <li className="text-red-600 font-bold">Difference: +₹500</li>
                </ul>
                <div className="mt-2 text-center">
                  Price increased by ₹500. Continue? (Y/N)
                </div>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* State Management */}
        <WorkflowSection title="11. Conversation State Machine" icon={RefreshCw} color="#9C27B0">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg">
            <div className="text-center mb-6">
              <h3 className="font-bold text-xl text-purple-700">State Transition Flow</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 text-center py-2 rounded font-semibold">IDLE</div>
                <span>→</span>
                <div className="flex-1 text-sm">User sends message</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-blue-200 text-center py-2 rounded font-semibold">SEARCHING</div>
                <span>→</span>
                <div className="flex-1 text-sm">Fetching flight results</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-green-200 text-center py-2 rounded font-semibold">SHOWING_RESULTS</div>
                <span>→</span>
                <div className="flex-1 text-sm">Displaying flight options</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-yellow-200 text-center py-2 rounded font-semibold">FLIGHT_SELECTED</div>
                <span>→</span>
                <div className="flex-1 text-sm">User selects a flight</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-orange-200 text-center py-2 rounded font-semibold">ADDING_SERVICES</div>
                <span>→</span>
                <div className="flex-1 text-sm">Selecting meals, seats, baggage</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-pink-200 text-center py-2 rounded font-semibold">COLLECTING_PASSENGER</div>
                <span>→</span>
                <div className="flex-1 text-sm">Gathering passenger details</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-purple-200 text-center py-2 rounded font-semibold">CONFIRMING_DETAILS</div>
                <span>→</span>
                <div className="flex-1 text-sm">User confirms booking</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-indigo-200 text-center py-2 rounded font-semibold">BOOKING</div>
                <span>→</span>
                <div className="flex-1 text-sm">Processing with TBO API</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-teal-200 text-center py-2 rounded font-semibold">TICKETING</div>
                <span>→</span>
                <div className="flex-1 text-sm">Issuing ticket</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-green-300 text-center py-2 rounded font-semibold">COMPLETED</div>
                <span>→</span>
                <div className="flex-1 text-sm">Booking successful!</div>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Design Guidelines */}
        <WorkflowSection title="12. UI/UX Design Guidelines" icon={Briefcase} color="#607D8B">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg">
              <h4 className="font-bold mb-3">🎨 Color Palette</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{backgroundColor: '#25D366'}}></div>
                  <span>WhatsApp Green</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{backgroundColor: '#4CAF50'}}></div>
                  <span>Success Green</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{backgroundColor: '#FF9800'}}></div>
                  <span>Warning Orange</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{backgroundColor: '#F44336'}}></div>
                  <span>Error Red</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{backgroundColor: '#2196F3'}}></div>
                  <span>Info Blue</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg">
              <h4 className="font-bold mb-3">📝 Typography</h4>
              <div className="space-y-2 text-sm">
                <div>Message Text: 16px</div>
                <div className="font-bold">Headers: 18px (Bold)</div>
                <div className="text-xl font-bold">Price: 20px (Bold)</div>
                <div className="text-sm">Labels: 14px</div>
                <div className="text-xs">Helper: 12px</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg">
              <h4 className="font-bold mb-3">🎯 Key Icons</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Plane size={16} />
                  <span>Flight</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>Location</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>Time</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={16} />
                  <span>Price</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>Passenger</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  <span>Success</span>
                </div>
              </div>
            </div>
          </div>
        </WorkflowSection>

        {/* Footer */}
        <div className="mt-8 space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Complete System Summary</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-bold mb-2">Frontend Layer</div>
                <ul className="space-y-1">
                  <li>• WhatsApp Business API</li>
                  <li>• Real-time messaging</li>
                  <li>• Media support</li>
                  <li>• Template messages</li>
                </ul>
              </div>
              <div>
                <div className="font-bold mb-2">Backend Layer</div>
                <ul className="space-y-1">
                  <li>• Node.js + Express.js</li>
                  <li>• RESTful API</li>
                  <li>• Webhook handling</li>
                  <li>• Session management</li>
                </ul>
              </div>
              <div>
                <div className="font-bold mb-2">AI & Data Layer</div>
                <ul className="space-y-1">
                  <li>• Google Gemini AI</li>
                  <li>• MongoDB database</li>
                  <li>• TBO Flight API</li>
                  <li>• Email/SMS services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Key Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold mb-2">API Integrations</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• WhatsApp Cloud API (Meta)</li>
                    <li>• Google Gemini 1.5 Flash</li>
                    <li>• TBO Flight Booking API</li>
                    <li>• MongoDB Atlas</li>
                    <li>• Nodemailer (SMTP)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold mb-2">Security Features</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Webhook signature verification</li>
                    <li>• Data encryption (TLS/SSL)</li>
                    <li>• Session token management</li>
                    <li>• Input validation & sanitization</li>
                    <li>• Rate limiting</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold mb-2">Performance Metrics</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Response time: &lt;2 seconds</li>
                    <li>• Session timeout: 30 minutes</li>
                    <li>• Cache duration: 15 minutes</li>
                    <li>• Webhook timeout: 10 seconds</li>
                    <li>• Concurrent users: 1000+</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold mb-2">Supported Features</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Multi-passenger booking</li>
                    <li>• LCC & Non-LCC flights</li>
                    <li>• SSR (meals, seats, baggage)</li>
                    <li>• Price monitoring</li>
                    <li>• Booking modifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
            <h3 className="text-xl font-bold mb-4 text-green-800">Complete Workflow States</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div className="font-bold text-gray-700">IDLE</div>
                <div className="text-xs text-gray-500 mt-1">Waiting for input</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div className="font-bold text-blue-700">SEARCHING</div>
                <div className="text-xs text-gray-500 mt-1">Fetching flights</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div className="font-bold text-green-700">SHOWING_RESULTS</div>
                <div className="text-xs text-gray-500 mt-1">Display options</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-700 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <div className="font-bold text-yellow-700">FLIGHT_SELECTED</div>
                <div className="text-xs text-gray-500 mt-1">Fare verification</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-700 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <div className="font-bold text-orange-700">ADDING_SERVICES</div>
                <div className="text-xs text-gray-500 mt-1">SSR selection</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-pink-700 text-white rounded-full flex items-center justify-center text-xs font-bold">6</div>
                <div className="font-bold text-pink-700">COLLECTING_PASSENGER</div>
                <div className="text-xs text-gray-500 mt-1">Get details</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-700 text-white rounded-full flex items-center justify-center text-xs font-bold">7</div>
                <div className="font-bold text-purple-700">CONFIRMING_DETAILS</div>
                <div className="text-xs text-gray-500 mt-1">Final check</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-indigo-700 text-white rounded-full flex items-center justify-center text-xs font-bold">8</div>
                <div className="font-bold text-indigo-700">BOOKING</div>
                <div className="text-xs text-gray-500 mt-1">API call</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-teal-700 text-white rounded-full flex items-center justify-center text-xs font-bold">9</div>
                <div className="font-bold text-teal-700">TICKETING</div>
                <div className="text-xs text-gray-500 mt-1">Issue ticket</div>
              </div>
              <div className="bg-white p-3 rounded shadow text-center relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-800 text-white rounded-full flex items-center justify-center text-xs font-bold">10</div>
                <div className="font-bold text-green-800">COMPLETED</div>
                <div className="text-xs text-gray-500 mt-1">Success!</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm bg-white p-6 rounded-lg shadow">
            <p className="font-bold text-lg mb-2">WhatsApp AI Agent - Flight Booking System</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-600" />
                <span>Natural Language Processing</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-600" />
                <span>Real-time Booking</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-600" />
                <span>Multi-API Integration</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-600" />
                <span>Session Management</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppAIWorkflow;